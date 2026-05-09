interface Props {
  search: string
  setSearch: (v: string) => void
  fetchPokemon: (s: string) => void
}

function Form({ search, setSearch, fetchPokemon }: Props) {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    setSearch('')
    e.preventDefault()
    fetchPokemon(search)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>Buscar</button>
    </form>
  )
}

export default Form
