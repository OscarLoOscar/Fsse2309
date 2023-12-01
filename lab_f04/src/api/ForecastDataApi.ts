import axios from "axios";
import { ForecastData } from "../data/ForecastData";
import * as ApiConfig from "./ApiConfig";

const apiKey = ApiConfig.apiKey;
const cityId = "7533612";
const units = "metric";

const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=${units}&appid=${apiKey}`;

export function fetchForecastApi(onLoadForecastData: (data: ForecastData) => void) {
  axios.get<ForecastData>(apiUrl)
    .then((response) => { //,then 入面要callback function , call完api有個object拎番黎，要放返係page index 既state
      onLoadForecastData(response.data as ForecastData);
    })
    .catch((error) => {
      console.error(error)
    });
};