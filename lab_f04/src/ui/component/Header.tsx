import React from "react"
import "./Header.css";
import * as ForecastDataApi from "../../../src/api/ForecastDataApi";

type Props = {
  updateTime: string | undefined, // undefined - >未callAPI
  fetchForecastData: () => void
}
//無state ，其實用function cpmponent都得
export default class Header extends React.Component<Props>{
  constructor(props: Props) {
    super(props);
  }
  //approach 2 ,寫method: 
  renderUpdatedTime = () => {
    if (this.props.updateTime) {
      return this.props.updateTime;
    } else {
      return "Please Wait";
    }
  }
  //closed the JSX elements inside a render() method for the class component.
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <h1 className="text-white">5 Days / 3 Hours Forecast</h1>
          {/* 目標個舊平排 : 加className flex */}
          <div className="d-flex align-items-center">
            <div className="text-white">
              Last Update Time:<br />
              {/* Approach 1 : 
              {
                this.props.updateTime ?
                  this.props.updateTime
                  : " Please Wait "
              } */}
              {this.renderUpdatedTime()}
            </div>
            <div id="btn-refresh" onClick={this.props.fetchForecastData}>

            </div>
          </div>
        </div>
        <div>
          <div id="title-location"><i>Hong Kong</i></div>
        </div>
      </div>
    );
  }
}