import React from "react"
import { Table } from "react-bootstrap";
import ForecastTableRow from "./ForecastTableRow";
import { ForecastData } from "../../data/ForecastData";

type Props = {
  forecastData: ForecastData ;
}
type State = {

}
export default class ForecastTable extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Table striped bordered hover size="dark" className="align-middle">
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
          {
            this.props.forecastData.list.map((forecastDataList) => (
              <ForecastTableRow item={forecastDataList} />
            ))
          }
        </tbody>
      </Table>
    );
  }
}

/* For-loop */
//fake array
// Array.from({length: 20 }).map(() => (
/*   <ForecastTableRow />*/
