import { Empleado } from '../classes/empleado'
import Form from './Form'
import type { FormValues } from './Form'

interface Props {
  empleado: Empleado | null
  onEditar: (id: number, cambios: Partial<Empleado>) => void
}

function EditarEmpleado({ empleado, onEditar }: Props) {
  function handleSubmit(values: FormValues) {
    if (empleado) onEditar(empleado.id, values)
  }

  return (
    <Form
      initialValues={{
        nombre: empleado?.nombre ?? '',
        edad: empleado?.edad ?? 0,
        email: empleado?.email ?? '',
        cargo: empleado?.cargo ?? '',
        salario: empleado?.salario ?? 0,
      }}
      buttonLabel='Guardar'
      onSubmit={handleSubmit}
    />
  )
}

export default EditarEmpleado
