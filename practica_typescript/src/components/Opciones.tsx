import { useState } from 'react'
import { Opciones } from '../types/enumTypes'
import Conversor_Temperatura from './ConversorTemperatura'
import ConversorKilogramos from './ConversorKilogramos'
import ConversorDistancia from './ConversorDistancia'

function OpcionesAElegir() {
  const [opcion, setOpcion] = useState<Opciones>(Opciones.temperatura)

  return (
    <div>
      <select onChange={e => setOpcion(e.target.value as Opciones)}>
        <option value={Opciones.temperatura}>Temperatura</option>
        <option value={Opciones.distancia}>Distancia</option>
        <option value={Opciones.peso}>Peso</option>
      </select>

      {opcion === Opciones.temperatura && (
        <div>
          <Conversor_Temperatura />
        </div>
      )}

      {opcion === Opciones.distancia && (
        <div>
          <ConversorDistancia />
        </div>
      )}

      {opcion === Opciones.peso && (
        <div>
          <ConversorKilogramos />
        </div>
      )}
    </div>
  )
}

export default OpcionesAElegir
