import type { SetStateAction } from 'react'
import type { Gasto } from '../types/types'

interface Props {
  lista: Gasto[]
  setFunction: React.Dispatch<React.SetStateAction<Gasto[]>>
  onBorrar: (
    id: number,
    lista: Gasto[],
    setFunction: React.Dispatch<SetStateAction<Gasto[]>>
  ) => void
}

function ListaGastos({ lista, setFunction, onBorrar }: Props) {
  return (
    <ul>
      {lista.map(gasto => (
        <li key={gasto.id}>
          Nombre: {gasto.nombre}
          Monto: {gasto.monto.toFixed(2)}
          Categoria: {gasto.categoria}
          <button onClick={() => onBorrar(gasto.id, lista, setFunction)}>
            Borrar
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListaGastos
