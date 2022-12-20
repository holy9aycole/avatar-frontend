import React from "react";
import CO2Span from "../home/CO2Span";

const ChartPeriod = ({ forecast_co2, period }) => {
  const forecast_co2_per_day = (forecast_co2 / 365).toFixed(2);
  const forecast_co2_per_hour = (forecast_co2_per_day / 24).toFixed(2);

  return (
    <div className="chart__period">
      <div className="chart__period__bar">
        <span className="chart__period__co2">
          <CO2Span />
        </span>
        <span className="chart__period__progress year">{forecast_co2} kg</span>
        <span className="chart__period__text">Periodo: {period}</span>
      </div>
      <div className="chart__period__bar">
        <span className="chart__period__co2">
          <CO2Span />
        </span>
        <span className="chart__period__progress day">
          {forecast_co2_per_day} kg
        </span>
        <span className="chart__period__text">por día</span>
      </div>
      <div className="chart__period__bar">
        <span className="chart__period__co2">
          <CO2Span />
        </span>
        <span className="chart__period__progress hour">
          {forecast_co2_per_hour} kg
        </span>
        <span className="chart__period__text">por hora</span>
      </div>
    </div>
  );
};

export default ChartPeriod;
