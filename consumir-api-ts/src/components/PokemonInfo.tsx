import type { ApiResponse } from '../types/types'

interface Props {
  pokemon: ApiResponse
}

function PokemonInfo({ pokemon }: Props) {
  return (
    <>
      {pokemon && (
        <div>
          <h2>Name: {pokemon.name}</h2>
          <p>Height: {pokemon.height}</p>
          <span>Weight: {pokemon.weight}</span>
          <div>
            <img
              src={pokemon.sprites.front_default}
              alt={`Image of ${pokemon.name}`}
            />
          </div>
          <div>
            <h2>Tipos:</h2>
            <ul>
              {pokemon &&
                pokemon?.types?.map((t, index) => (
                  <li key={index}>{t.type.name}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default PokemonInfo
