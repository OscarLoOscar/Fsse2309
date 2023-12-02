import { Container } from "react-bootstrap";
import { ForecastData } from "../../../data/ForecastData"
import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import ForecastTable from "../../component/ForecastTable";
import WeatherChart from "../../component/WeatherChart";
import { ChartData } from "../../../data/ChartData"
import moment from "moment/moment";
import TableLoadingSpinner from "../../component/TableLoadingSpinner";
import * as ForecastDataApi from "../../../api/ForecastDataApi";
type Props = {

}
export default function ForecastPage() {
  const [forecastData, setForecastData] = useState<ForecastData | undefined>(undefined);
  const [updatedTime, setUpdateTime] = useState<string | undefined>(undefined);
  const [chartData, setWeatherChart] = useState<ChartData[]>([]);

  const fetchForecastData = async () => {
    try {
      const data = await ForecastDataApi.getForecastData();
      setForecastData(data);
      // Assuming ForecastData can be transformed to ChartData     
      const weatherData: ChartData[] = data.list.map((item) => ({
        name: moment.unix(item.dt).format("YYYY-MM-DD HH:mm:ss"),
        temperature: item.main.temp_max,
        humidity: item.main.humidity
      }));
      setWeatherChart(weatherData);
      setUpdateTime(moment().format("YYYY-MM-DD HH:mm:ss"));
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  useEffect(() => {
    fetchForecastData();
  }, []
  );

  return (
    <Container>
      <Header updateTime={updatedTime} fetchForecastData={fetchForecastData} />
      {chartData
        ? <WeatherChart data={chartData} />
        : <TableLoadingSpinner />
      }
      {
        forecastData
          ? <ForecastTable forecastData={forecastData} />
          : <TableLoadingSpinner />
      }
    </Container>
  );
}
