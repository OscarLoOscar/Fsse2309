import React from "react";
import "./Header.css"

type Props = {
  updateTime: string | undefined, // undefined - >未callAPI
  fetchForecastData: () => void
}

const Header: React.FC<Props> = (props) => {
  const renderUpdatedTime = () => {
    if (props.updateTime) {
      return props.updateTime;
    } else {
      return "Please Wait";
    }
  }
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
            {renderUpdatedTime()}
          </div>
          <div id="btn-refresh" >

          </div>
        </div>
      </div>
      <div>
        <div id="title-location"><i>Hong Kong</i></div>
      </div>
    </div>
  );
}

export default Header;