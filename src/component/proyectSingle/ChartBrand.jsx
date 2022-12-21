import React from "react";
import Chart from "react-google-charts";
import CO2Span from "../home/CO2Span";

const ChartBrand = ({ forecastByBrand = [], forecast_co2 }) => {
  const data = forecastByBrand.map((brand) => [
    brand.brand_name,
    parseFloat(brand.forecast_co2) / 100,
    parseInt(brand.registerCars),
  ]);

  return (
    <div className="chart__brand">
      <Chart
        chartType="ColumnChart"
        data={[["Marca", "CO2 emitido (kg)", ""], ...data]}
        options={{
          title: "Dencidad de emision de CO2 en kg/año",
          width: 600,
          height: 600,
          pointSize: 100,
        }}
      />
    </div>
  );
};

export default ChartBrand;
