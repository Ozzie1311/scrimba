async function fetchPokemon() {
  setIsLoading(true)
  try {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${search}`
    const response = await fetch(baseUrl)
    if (!response.ok) throw new Error(`Failed to fetch pokemon $pokemon}`)
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
