import React from "react";
import { ForecastDataList } from "../../data/ForecastData";
import * as moment from "moment/moment";

type Props = {
  item: ForecastDataList
}

type State = {

}
// extends React.Component / extends Component都得
export default class ForecastTableRow extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

  }
  render() { // class component 先要render()
    return (
      <tr>
        <td>{moment.unix(this.props.item.dt).format("YYYY-MM-DD")}</td>
        <td>{moment.unix(this.props.item.dt).format("HH:mm:ss")}</td>
        <td>{this.props.item.main.temp_min}/{this.props.item.main.temp_max}</td>
        <td>{this.props.item.main.humidity}</td>
        <td><img width="64px"
          src={`https://openweathermap.org/img/wn/${this.props.item.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
        </td>
      </tr>
    );
  }
}