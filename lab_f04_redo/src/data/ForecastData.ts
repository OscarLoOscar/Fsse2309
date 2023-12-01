export interface ForecastData{
  list: ForecastDataListItem[]
}

export interface ForecastDataListItem {
  dt: number,
  main: ForecastDataMain,
  weather: ForecastDataWeather[]
}

export interface ForecastDataMain {
  temp_min: number,
  temp_max: number,
  humidity: number
}

export interface ForecastDataWeather {
  icon: string
}
