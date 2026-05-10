import { Empleado } from '../classes/empleado'

type EmpleadoPublico = Omit<Empleado, 'salario'>

interface Props {
  empleados: EmpleadoPublico[]
}

function ListaEmpleados({ empleados }: Props) {
  return (
    <div>
      <ul>
        {empleados?.map(e => (
          <li key={e.id}>
            {e.getInfo()}
            <button onClick={() => onEditar(e)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaEmpleados
