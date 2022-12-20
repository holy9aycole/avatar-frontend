import React from "react";

const ChartBrand = ({ forecastByBrand = [], forecast_co2 }) => (
  <div className="chart__period chart__brand">
    {forecastByBrand.map((forecast) => {
      const percentage = (
        (forecast.forecast_co2 / (forecast_co2 * 1000)) *
        100
      ).toFixed(2);
      return (
        <div className="chart__period__bar" key={forecast.brand_name}>
          <span className="chart__period__co2">
            {forecast.brand_name} - <span>{percentage} %</span>
          </span>
          <span
            className="chart__period__progress"
            style={{ width: percentage + 400 + "%" }}
          ></span>
          <span className="chart__period__text">
            {forecast.forecast_co2 / 1000} kg
          </span>
        </div>
      );
    })}
  </div>
);

export default ChartBrand;
