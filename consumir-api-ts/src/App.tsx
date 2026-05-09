import PokemonInfo from './components/PokemonInfo'
import Form from './components/Form'
import { usePokemon } from './hooks/usePokemon'

function App() {
  const { search, setSearch, pokemon, isLoading, error, fetchPokemon } =
    usePokemon()

  return (
    <div>
      <h1>Comenzando proyecto de Consumir API</h1>
      <h2>Busca tu pokemon:</h2>
      <Form search={search} setSearch={setSearch} fetchPokemon={fetchPokemon} />
      {isLoading && <p>Cargando pokemon...</p>}
      {error && <p>Pokemon no encontrado...</p>}
      {!isLoading && !error && pokemon && <PokemonInfo pokemon={pokemon} />}
    </div>
  )
}

export default App
