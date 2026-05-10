export class Persona {
  nombre: string
  edad: number
  email: string

  constructor(nombre: string, edad: number, email: string) {
    this.nombre = nombre
    this.edad = edad
    this.email = email
  }
}

export class Empleado extends Persona {
  id: number
  cargo: string
  salario: number
  constructor(
    nombre: string,
    edad: number,
    email: string,
    cargo: string,
    salario: number
  ) {
    super(nombre, edad, email)
    this.id = Date.now()
    this.cargo = cargo
    this.salario = salario
  }

  getInfo(): string {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Email: ${this.email}, Cargo: ${this.cargo}, Salario: ${this.salario.toFixed(2)}$`
  }
}
