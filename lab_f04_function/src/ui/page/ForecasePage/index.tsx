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
  // State to store the forecast data
  const [forecastData, setForecastData] = useState<ForecastData | undefined>(undefined);
  // State to store the last updated time
  const [updatedTime, setUpdateTime] = useState<string | undefined>(undefined);
  // State to store the chart data
  const [chartData, setWeatherChart] = useState<ChartData[]>([]);

  // Function to fetch the forecast data
  const fetchForecastData = async () => {
    try {
      // Fetch the forecast data from the API
      const data = await ForecastDataApi.getForecastData();
      // Set the forecast data state
      setForecastData(data);
      // Assuming ForecastData can be transformed to ChartData     
      const weatherData: ChartData[] = data.list.map((item) => ({
        name: moment.unix(item.dt).format("YYYY-MM-DD HH:mm:ss"),
        temperature: item.main.temp_max,
        humidity: item.main.humidity
      }));
      // Set the chart data state
      setWeatherChart(weatherData);
      // Set the last updated time
      setUpdateTime(moment().format("YYYY-MM-DD HH:mm:ss"));
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  // Call the fetchForecastData function when the component is mounted
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