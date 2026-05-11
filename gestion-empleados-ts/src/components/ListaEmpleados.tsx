import { Empleado } from '../classes/empleado'

// type EmpleadoPublico = Omit<Empleado, 'salario'>

interface Props {
  empleados: Empleado[]
  onSeleccionarEditar: (empleado: Empleado) => void
  onCancel: () => void
}

function ListaEmpleados({ empleados, onSeleccionarEditar, onCancel }: Props) {
  return (
    <div>
      <ul>
        {empleados?.map((e) => (
          <li key={e.id}>
            {e.getInfo()}
            <button onClick={() => onSeleccionarEditar(e)}>Editar</button>
            <button onClick={onCancel}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaEmpleados
