export function convertirAFarenheit(numero: number): number {
  return Number(numero) * 1.8 + 32
}

export function convertirAKelvin(numero: number): number {
  return Number(numero) + 32
}

export function kgALb(kilogramos: number): number {
  return Number(kilogramos) * 2.2046
}

export function kgAGr(kilogramos: number): number {
  return Number(kilogramos) * 1000
}

export function convertirKmAmts(kilometros: number): number {
  return Number(kilometros) * 1000
}

export function convertirKmAMillas(kilometros: number): number {
  return Number(kilometros) * 0.6214
}
