import React from "react";
import Chart from "react-google-charts";
import CO2Span from "./CO2Span";

const HomeContainerMap = ({ forecasts }) => {
  const forecastData = forecasts.map((forecast) => [
    forecast.period,
    forecast.co2,
    "#3c9962",
    null,
  ]);

  return (
    <section className="home__container__map">
      <h2 className="container__map__title">
        Diagrama <CO2Span /> histórico
      </h2>
      {forecasts.length ? (
        <Chart
          chartType="ColumnChart"
          data={[
            [
              "Element",
              "Density",
              { role: "style" },
              {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
              },
            ],
            ...forecastData,
          ]}
          options={{
            title: "Dencidad de emision de CO2 en kg/año",
            width: 600,
            height: 600,
            bar: { groupWith: "95%" },
            legend: { position: "none" },
          }}
        />
      ) : null}
    </section>
  );
};

export default HomeContainerMap;
