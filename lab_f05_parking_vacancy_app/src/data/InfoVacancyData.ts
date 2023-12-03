export interface InfoVacancyData {
  park_Id: string
  name: string
  displayAddress: string
  district?: string
  latitude: number
  longitude: number
  imageUrl?: string
  privateCar: number
  LGV: number
  HGV: number
  motorCycle: number
  coach: number
}

export type VehicleType = "privateCar" | "LGV" | "HGV" | "motorCycle" | "coach"