import type { SetStateAction } from 'react'
import { Categoria } from '../types/types'
import type { Gasto } from '../types/types'

export function agregarGasto(
  nombre: string,
  monto: number,
  categoria: Categoria,
  lista: Gasto[],
  setFunction: React.Dispatch<SetStateAction<Gasto[]>>
) {
  const nuevoGasto: Gasto = {
    id: Date.now(),
    nombre,
    monto,
    categoria,
  }

  setFunction([...lista, nuevoGasto])
}

export function borrarGasto(
  id: number,
  lista: Gasto[],
  setFunction: React.Dispatch<SetStateAction<Gasto[]>>
) {
  const filtrarListaGastos = lista.filter(gasto => gasto.id !== id)
  setFunction(filtrarListaGastos)
}
