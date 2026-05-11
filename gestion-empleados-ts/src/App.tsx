import { useState } from 'react'
import { Empleado } from './classes/empleado'
import IngresarEmpleado from './components/IngresarEmpleado'
import ListaEmpleados from './components/ListaEmpleados'
import EditarEmpleado from './components/EditarEmpleado'
import type { FormValues } from './components/Form'

function App() {
  const [empleados, setEmpleados] = useState<Empleado[]>([])
  const [empleadoEditando, setEmpleadoEditando] = useState<Empleado | null>(
    null,
  )

  function agregarEmpleado(values: FormValues) {
    const { nombre, edad, email, cargo, salario } = values
    const nuevoEmpleado = new Empleado(nombre, edad, email, cargo, salario)
    setEmpleados([...empleados, nuevoEmpleado])
  }

  function editarEmpleado(id: number, cambios: Partial<Empleado>) {
    setEmpleados(
      empleados.map((e) => {
        if (e.id !== id) return e

        return new Empleado(
          cambios.nombre ?? e.nombre,
          cambios.edad ?? e.edad,
          cambios.email ?? e.email,
          cambios.cargo ?? e.cargo,
          cambios.salario ?? e.salario,
        )
      }),
    )
    cancelarEdicion()
  }

  function cancelarEdicion() {
    setEmpleadoEditando(null)
  }

  return (
    <div>
      <h2>Comenzando proyecto de MiniGestion de empleados</h2>
      <div>
        <h2>Datos del empleado: </h2>
        {empleadoEditando ? (
          <EditarEmpleado
            empleado={empleadoEditando}
            onEditar={editarEmpleado}
          />
        ) : (
          <IngresarEmpleado onSubmit={(values) => agregarEmpleado(values)} />
        )}
        <ListaEmpleados
          empleados={empleados}
          onSeleccionarEditar={(e) => setEmpleadoEditando(e)}
          onCancel={cancelarEdicion}
        />
      </div>
    </div>
  )
}

export default App
