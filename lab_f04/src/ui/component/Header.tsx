import React from "react"
import "./Header.css";

type Props = {
  updateTime: string | undefined,
  // fetchWeatherData: () => void
}
//無state ，其實用function cpmponent都得
export default class Header extends React.Component<Props>{
  constructor(props: Props) {
    super(props);
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
              {
              this.props.updateTime ?
              this.props.updateTime 
              :" Please Wait " 
              }
            </div>
            <div id="btn-refresh">

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