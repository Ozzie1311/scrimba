import { useState } from 'react'
import type { ApiResponse } from '../types/types'

export function usePokemon() {
  const [search, setSearch] = useState<string>('')
  const [pokemon, setPokemon] = useState<ApiResponse | null>(null)
  const [error, setError] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function fetchPokemon() {
    setIsLoading(true)
    try {
      const baseUrl = `https://pokeapi.co/api/v2/pokemon/${search}`
      const response = await fetch(baseUrl)
      if (!response.ok) throw new Error(`Failed to fetch pokemon ${pokemon}`)
      const data: ApiResponse = await response.json()
      setPokemon(data)
      setError(false)
    } catch (err) {
      setError(true)
      console.error('There is an error', err)
    } finally {
      setIsLoading(false)
    }
  }

  return { search, setSearch, pokemon, isLoading, error, fetchPokemon }
}
