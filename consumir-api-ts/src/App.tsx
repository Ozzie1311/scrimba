import type { ApiResponse } from './types/types'
import { useState, useEffect } from 'react'

function App() {
  const [search, setSearch] = useState<string>('pikachu')
  const [pokemon, setPokemon] = useState<ApiResponse | null>(null)

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const baseUrl = `https://pokeapi.co/api/v2/pokemon/${search}`
        const response = await fetch(baseUrl)
        if (!response.ok) throw new Error(`Failed to fectch pokemon ${search}`)
        const data: ApiResponse = await response.json()
        setPokemon(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchPokemon()
  }, [pokemon])

  return (
    <div>
      <h1>Comenzando proyecto de Consumir API</h1>
      <div>
        <h2>Name: {pokemon?.name}</h2>
        <p>Height: {pokemon?.height}</p>
        <span>Weight: {pokemon?.weight}</span>
        <span>Sprites: {pokemon?.sprites}</span>
      </div>
    </div>
  )
}

export default App
