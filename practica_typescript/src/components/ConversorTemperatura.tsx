import { useState } from 'react'
import { convertirAFarenheit, convertirAKelvin } from '../utils/converters'

function Conversor_Temperatura() {
  const [celciusF, setCelsiusF] = useState(0)
  const [celciusK, setCelsiusK] = useState(0)
  return (
    <div>
      <div>
        <h3>Temperatura</h3>
        <h4>Celcius a Farenheit</h4>
        <div className='wrapper'>
          <input
            type='number'
            value={celciusF}
            onChange={e => setCelsiusF(Number(e.target.value))}
          />
          <span> = </span>
          <h2>{convertirAFarenheit(celciusF)} F°</h2>
        </div>

        <h4>Celcius a Kelvin</h4>
        <div className='wrapper'>
          <input
            type='number'
            value={celciusK}
            onChange={e => setCelsiusK(Number(e.target.value))}
          />
          <span> = </span>
          <h2>{convertirAKelvin(celciusK)} K°</h2>
        </div>
      </div>
    </div>
  )
}

export default Conversor_Temperatura
