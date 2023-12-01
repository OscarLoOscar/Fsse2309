import React from "react"
import { Table } from "react-bootstrap";
import { ForecastData } from "../../data/ForecastData";
import ForecastTableRow from "./ForecastTableRow";

type Props = {
  forecastData: ForecastData | undefined
};

const ForecastTable: React.FC<Props> = ({ forecastData }) => {
  return (
    <Table striped bordered hover size="table-success" className="align-middle">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Temperature(min/max)</th>
          <th>humidity(%)</th>
          <th>Weather</th>
        </tr>
      </thead>
      <tbody>
        {/* 一個table一個component，每條row一個component */}
        {forecastData?.list.map((dataListItem) => (
            <ForecastTableRow key={dataListItem.dt} item={dataListItem} />
          ))}
      </tbody>
    </Table>
  );
        };
        
export default ForecastTable;
