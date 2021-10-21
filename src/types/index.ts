export interface ICharacter {
  id: number
  name: string
  status: string
  type: string
  image: string
  // origin: ICharacterOriginLocation
  // residentes: ICharacterOriginLocation
}
export interface ICharacterOriginLocation {
  name: string
  residentes: Array<IOriginLocationResidents>
}
export interface IOriginLocationResidents {
  name: string
}

export interface IInfoApi {
  count: number
  pages: number
  next: number
  prev: number
}
