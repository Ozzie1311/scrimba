import { useState } from 'react'

export interface FormValues {
  nombre: string
  edad: number
  cargo: string
  email: string
  salario: number
}

interface Props {
  initialValues: FormValues
  onSubmit: (values: FormValues) => void
  buttonLabel: string
}

function Form({ initialValues, onSubmit, buttonLabel }: Props) {
  const [nombre, setNombre] = useState(initialValues.nombre)
  const [edad, setEdad] = useState(initialValues.edad)
  const [email, setEmail] = useState(initialValues.email)
  const [cargo, setCargo] = useState(initialValues.cargo)
  const [salario, setSalario] = useState(initialValues.salario)

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit({ nombre, edad, email, cargo, salario })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='wrapper'>
        <label>
          Nombre
          <input
            type='text'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Edad
          <input
            type='text'
            value={edad}
            onChange={(e) => setEdad(Number(e.target.value))}
          />
        </label>
        <label>
          Email
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Cargo
          <input
            type='text'
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </label>
        <label>
          Salario
          <input
            type='text'
            value={salario}
            onChange={(e) => setSalario(Number(e.target.value))}
          />
        </label>
        <div className='button-wrapper'>
          <button type='submit'>{buttonLabel}</button>
        </div>
      </form>
    </div>
  )
}

export default Form
