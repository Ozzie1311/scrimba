interface Sprite {
  front_default: string
}

interface TypeInfo {
  name: string
}

interface Type {
  type: TypeInfo
}

export interface ApiResponse {
  name: string
  height: number
  weight: number
  sprites: Sprite
  types: Type[]
}
