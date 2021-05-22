export type appointedCityType = 'Commune' | 'Delegated commune' | 'Subordinate commune'

export interface NewCityPayload  {
    name: string
    postCode: string
    type: appointedCityType
    labelUpercase: string
    labelComplete: string
    codeRegion: string
    region: string
    department: string
    codeDepartment: string
    inseeCode: string
}