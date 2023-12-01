import axios from "axios";
import * as ApiConFig from "./ApiConfig"
import { ForecastData } from "../data/ForecastData";

const apiKey = ApiConFig.ApiKey;
const cityId = "7533612";
const units = "metric";

const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=${units}&appid=${apiKey}`;

export const getForecastData = async (): Promise<ForecastData> => {
  const response = await axios.get<ForecastData>(apiUrl)
  return response.data;
}