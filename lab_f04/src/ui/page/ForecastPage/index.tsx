import React from "react"
import Header from "../../component/Header";
import { Container } from "react-bootstrap";
import ForecastTable from "../../component/ForecastTable";
// import mockData from "./response.json"
import { ForecastData } from "../../../data/ForecastData";
import moment from "moment/moment";
import TableLoadingSpinner from "../../component/TableLoadingSpinner";
import * as ForecastDataApi from "../../../api/ForecastDataApi";

//我地已經install左bootstrap，已經有晒人地既所有css，唔洗自己啲set，要用既時候係class加番名，已經用到人地既propertys
//小心大細階，細階-> HTML , 大階先係React bootstrap component
//一個Container包住D component，會令到website output好睇D，留白

//step 1 
type Props = {

}

//step 2
type State = {
  forecastData: undefined | ForecastData,
  updatedTime: undefined | string
  //做完api clss，留黎呢度，諗lifeCycle
}

// class component example 
export default class ForcastPage extends React.Component<Props, State>{
  //step 3 
  constructor(props: Props) { //永記constructer 唔call API
    super(props);
    this.state = {
      forecastData: undefined,
      updatedTime: undefined
    }
  }

  //ForecastDataApi
  onLoadForecastData = (data: ForecastData) => {
    this.setState({
      forecastData: data,
      updatedTime: moment().format("YYYY-MM-DD HH:mm:ss")
    })
  }

  fetchForecastData = () => {
    this.setState({ //set 番clickrefresh制去返loading page，UI問題
      forecastData: undefined,
      updatedTime: undefined
    })
    setTimeout(() => {
      ForecastDataApi.fetchForecastApi(this.onLoadForecastData);
    }, 2000)
  }

  //lifeCycle
  componentDidMount(): void {
    // setTimeout(() => { //table 想出loading spinner ，set timr
    // this.setState({
    //   forecastData: mockData.list,
    //   updatedTime: moment().format("YYYY-MM-DD HH:mm:ss")
    // });
    this.fetchForecastData();
    // }, 2000)
  }

  //step 4 
  render() {
    return (
      <Container>
        <Header updateTime={this.state.updatedTime} fetchForecastData={this.fetchForecastData} />
        {
          this.state.forecastData //&&
            ? <ForecastTable forecastData={this.state.forecastData} />
            : <TableLoadingSpinner />
        }
        {/* Type 'ForecastData | undefined' is not assignable to type 'ForecastData'.
  Type 'undefined' is not assignable to type 'ForecastData'. 
  要做checking*/}
      </Container>
    );
  }
}