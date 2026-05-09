export interface Gasto {
  id: number
  nombre: string
  monto: number
  categoria: Categoria
}

export enum Categoria {
  comida = 'Comida',
  transporte = 'Transporte',
  entretenimiento = 'Entretenimiento',
}
