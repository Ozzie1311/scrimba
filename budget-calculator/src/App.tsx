import { useState } from 'react'
import type { Gasto } from './types/types'
import Form from './components/Form'
import ListaGastos from './components/ListaGastos'
import { borrarGasto } from './utils/utils'

function App() {
  const [listaGastos, setListaGastos] = useState<Gasto[]>([])

  return (
    <div>
      <h1>Elemento JSX</h1>
      <h2>Ingresar gasto</h2>
      <Form lista={listaGastos} setFunction={setListaGastos} />
      <ListaGastos
        lista={listaGastos}
        setFunction={setListaGastos}
        onBorrar={borrarGasto}
      />
    </div>
  )
}

export default App
