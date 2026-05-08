import { useState } from 'react'
import { convertirKmAmts, convertirKmAMillas } from '../utils/converters'

function ConversorDistancia() {
  const [kilometrosM, setKilometrosM] = useState<number>(0)
  const [kilometrosMM, setKilometrosMM] = useState<number>(0)

  return (
    <div>
      <div>
        <h3>Distancia</h3>
        <h4>Kilometros a Metros</h4>
        <div className='wrapper'>
          <input
            type='number'
            value={kilometrosM}
            onChange={e => setKilometrosM(Number(e.target.value))}
          />
          <span> = </span>
          <h2>{Number(convertirKmAmts(kilometrosM))} metros</h2>
        </div>

        <h4>Kilogramos a Gramos</h4>
        <div className='wrapper'>
          <input
            type='number'
            value={kilometrosMM}
            onChange={e => setKilometrosMM(Number(e.target.value))}
          />
          <span> = </span>
          <h2>{Number(convertirKmAMillas(kilometrosMM).toFixed(2))} millas</h2>
        </div>
      </div>
    </div>
  )
}

export default ConversorDistancia
