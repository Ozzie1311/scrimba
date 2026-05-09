import { useState, type SetStateAction } from 'react'
import { Categoria } from '../types/types'
import { agregarGasto } from '../utils/utils'
import type { Gasto } from '../types/types'

interface Props {
  lista: Gasto[]
  setFunction: React.Dispatch<SetStateAction<Gasto[]>>
}

function Form({ lista, setFunction }: Props) {
  const [nombre, setNombre] = useState<string>('')
  const [monto, setMonto] = useState<number>(0)
  const [categoria, setCategoria] = useState<Categoria>(Categoria.comida)

  function cleanInputs() {
    setNombre('')
    setMonto(0)
    setCategoria(Categoria.comida)
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    agregarGasto(nombre, monto, categoria, lista, setFunction)
    cleanInputs()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type='text'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </label>
      <label>
        Monto
        <input
          type='text'
          value={monto}
          onChange={e => setMonto(Number(e.target.value))}
        />
      </label>
      <label>
        Categoria
        <select
          value={categoria}
          onChange={e => setCategoria(e.target.value as Categoria)}
        >
          <option value={Categoria.comida}>Comida</option>
          <option value={Categoria.transporte}>Transporte</option>
          <option value={Categoria.entretenimiento}>Entretenimiento</option>
        </select>
      </label>
      <button type='submit'>Agregar gasto</button>
    </form>
  )
}

export default Form
