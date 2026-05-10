import { useState } from 'react'

interface Props {
  agregarEmpleado: (
    nombre: string,
    edad: number,
    email: string,
    cargo: string,
    salario: number
  ) => void
}

function Form({ agregarEmpleado }: Props) {
  const [nombre, setNombre] = useState<string>('')
  const [edad, setEdad] = useState<number>(0)
  const [email, setEmail] = useState<string>('')
  const [cargo, setCargo] = useState<string>('')
  const [salario, setSalario] = useState<number>(0)

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    agregarEmpleado(nombre, edad, email, cargo, salario)
    clearInputs()
  }

  function clearInputs() {
    setNombre('')
    setEdad(0)
    setEmail('')
    setCargo('')
    setSalario(0)
  }
  return (
    <form onSubmit={handleSubmit} className='wrapper'>
      <label>
        Nombre
        <input
          type='text'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </label>
      <label>
        Edad
        <input
          type='text'
          value={edad}
          onChange={e => setEdad(Number(e.target.value))}
        />
      </label>
      <label>
        Email
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Cargo
        <input
          type='text'
          value={cargo}
          onChange={e => setCargo(e.target.value)}
        />
      </label>
      <label>
        Salario
        <input
          type='text'
          value={salario}
          onChange={e => setSalario(Number(e.target.value))}
        />
      </label>
      <div className='button-wrapper'>
        <button type='submit'>Crear empleado</button>
      </div>
    </form>
  )
}

export default Form
