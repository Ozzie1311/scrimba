import Form from './Form'
import type { FormValues } from './Form'

interface Props {
  onSubmit: (values: FormValues) => void
  initialValues?: FormValues
}

function IngresarEmpleado({ onSubmit }: Props) {
  return (
    <Form
      initialValues={{
        nombre: '',
        edad: 0,
        email: '',
        cargo: '',
        salario: 0,
      }}
      buttonLabel='Agregar'
      onSubmit={onSubmit}
    />
  )
}

export default IngresarEmpleado
