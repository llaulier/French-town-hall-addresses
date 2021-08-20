export type appointedCityType = 'Commune' | 'Delegated commune' | 'Subordinate commune'

export interface NewCityPayload  {
    name: string
    postcode: string
    type: appointedCityType
    labelUppercase: string
    labelComplete: string
    codeRegion: number
    region: string
    department: string
    codeDepartment: number
    inseeCode: string
}