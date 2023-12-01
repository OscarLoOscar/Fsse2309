import { Container } from "react-bootstrap";
import { ForecastData } from "../../../data/ForecastData"
import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import ForecastTable from "../../component/ForecastTable";
import moment from "moment/moment";
import TableLoadingSpinner from "../../component/TableLoadingSpinner";
import * as ForecastDataApi from "../../../api/ForecastDataApi";
type Props = {

}
export default function ForecastPage() {
  const [forecastData, setForecastData] = useState<ForecastData | undefined>(undefined);
  const [updatedTime, setUpdateTime] = useState<string | undefined>(undefined);
  // const [loading, setLoading] = useState(true);

  const fetchForecastData = async () => {
    try {
      const data = await ForecastDataApi.getForecastData();
      setForecastData(data);
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
      {
        forecastData
          ? <ForecastTable forecastData={forecastData} />
          : <TableLoadingSpinner />
      }
    </Container>
  );
}
