import axios from "axios";
import { ForecastData } from "../data/ForecastData";

const cityId = "7533612";
const apiKey = "4f075da55c57a429b3093993c2053c4b";
const units = "metric";

const apiUrl =`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=${units}&appid=${apiKey}`;

export default function WeatherApi() {
  const fetchWeatherData = (getResponse : (data :ForecastData)=>void )=>{
    axios.get(apiUrl)
    .then((response)=>{ //,then 入面要callback function
      getResponse(response.data as ForecastData);
    })
    .catch((error)=>{
      console.error(error)
    });
  };
}