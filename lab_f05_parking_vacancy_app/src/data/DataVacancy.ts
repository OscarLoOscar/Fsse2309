export interface DataVacancy {
  results: Result[]
}

export interface Result {
  park_Id: string
  privateCar?: PrivateCar[]
  LGV?: Lgv[]
  HGV?: Hgv[]
  motorCycle?: MotorCycle[]
  coach?: Coach[]
}

export interface PrivateCar {
  vacancy: number
}

export interface Lgv {
  vacancy: number
}

export interface Hgv {
  vacancy: number
}

export interface MotorCycle {
  vacancy: number
}

export interface Coach {
  vacancy: number
}
