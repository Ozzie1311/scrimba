import { useState } from 'react'
import { Empleado } from './classes/empleado'
import Form from './components/Form'
import ListaEmpleados from './components/ListaEmpleados'

function App() {
  const [empleados, setEmpleados] = useState<Empleado[]>([])
  const [empleadoEditando, setEmpleadoEditando] = useState<Empleado | null>(
    null
  )

  function agregarEmpleado(
    nombre: string,
    edad: number,
    email: string,
    cargo: string,
    salario: number
  ) {
    const nuevoEmpleado = new Empleado(nombre, edad, email, cargo, salario)
    setEmpleados([...empleados, nuevoEmpleado])
  }

  function editarEmpleado(id: number, cambios: Partial<Empleado>) {
    setEmpleados(
      empleados.map(e => {
        if (e.id !== id) return e

        return new Empleado(
          cambios.nombre ?? e.nombre,
          cambios.edad ?? e.edad,
          cambios.email ?? e.email,
          cambios.cargo ?? e.cargo,
          cambios.salario ?? e.salario
        )
      })
    )
  }

  return (
    <div>
      <h2>Comenzando proyecto de MiniGestion de empleados</h2>
      <div>
        <h2>Datos del empleado: </h2>
        <Form agregarEmpleado={agregarEmpleado} />
        <ListaEmpleados empleados={empleados} />
      </div>
    </div>
  )
}

export default App
