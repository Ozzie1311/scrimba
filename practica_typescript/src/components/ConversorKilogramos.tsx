import { useState } from 'react'
import { kgALb, kgAGr } from '../utils/converters'

function ConversorKilogramos() {
  const [kilogramosL, setKilogramosL] = useState<number>(0)
  const [kilogramosGr, setKilogramosGr] = useState<number>(0)

  return (
    <div>
      <div>
        <h3>Peso</h3>
        <h4>Kilogramos a Libras</h4>
        <div className='wrapper'>
          <input
            type='number'
            value={kilogramosL}
            onChange={e => setKilogramosL(Number(e.target.value))}
          />
          <span> = </span>
          <h2>{kgALb(kilogramosL).toFixed(2)} libras</h2>
        </div>

        <h4>Kilogramos a Gramos</h4>
        <div className='wrapper'>
          <input
            type='number'
            value={kilogramosGr}
            onChange={e => setKilogramosGr(Number(e.target.value))}
          />
          <span> = </span>
          <h2>{kgAGr(kilogramosGr).toFixed(2)} gramos</h2>
        </div>
      </div>
    </div>
  )
}

export default ConversorKilogramos
