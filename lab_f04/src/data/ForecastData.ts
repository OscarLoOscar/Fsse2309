export interface ForecastData{
  list: ForecastDataList[]
}

export interface ForecastDataList {
  dt: number,
  main: ForecastDataListMain,
  weather: ForecastDataListWeather[]
}

export interface ForecastDataListMain {
  temp_min: number,
  temp_max: number,
  humidity: number
}

export interface ForecastDataListWeather {
  icon: string
}
