import * as moment from "moment/moment";
import { ForecastDataListItem } from "../../data/ForecastData";

type Props = {
  item: ForecastDataListItem
}

const ForecastTableRow: React.FC<Props> = ({ item }) => {
  return (
    <tr>
      <td>{moment.unix(item.dt).format("YYYY-MM-DD")}</td>
      <td>{moment.unix(item.dt).format("HH:mm:ss")}</td>
      <td>{item.main.temp_min}/{item.main.temp_max}</td>
      <td>{item.main.humidity}</td>
      <td><img width="64px"
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
      </td>
    </tr>
  );
};

export default ForecastTableRow;