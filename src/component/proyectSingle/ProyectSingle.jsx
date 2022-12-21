import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
import { useLocation } from "react-router-dom";
import { API } from "../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CO2Span from "../home/CO2Span";
import ChartBrand from "./ChartBrand";
import ChartPeriod from "./ChartPeriod";
import ChartRecommendation from "./ChartRecommendation";

const ProyectSingle = () => {
  const [project, setProject] = useState({});
  const { pathname } = useLocation();
  const period = pathname.substring(pathname.lastIndexOf("/") + 1);

  const dataCO2 = project.forecastByBrand
    ? project.forecastByBrand.map((brand) => [
        brand.brand_name,
        parseFloat(brand.forecast_co2) / 100,
      ])
    : [];

  const dataCar = project.forecastByBrand
    ? project.forecastByBrand.map((brand) => [
        brand.brand_name,
        parseInt(brand.registerCars),
      ])
    : [];

  useEffect(() => {
    fetch(API + "/project/" + period)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setProject(data.project);
        }
      });
  }, []);

  useEffect(() => {
    console.log(project);
  }, [project]);

  return (
    <>
      <Header />
      <main className="proyect__single">
        <h2 className="proyect__single__title">
          Reporte del periodo {project.period}
        </h2>
        <div className="proyect__single__vehicles">
          <span className="proyect__single__icon"></span>
          <span className="proyect__single__text">
            {project.registerCars} coches registrados
          </span>
        </div>
        <div className="proyect__single__vehicles">
          <span className="proyect__single__icon"></span>
          <span className="proyect__single__text">
            {project.totalForecast}kg de <CO2Span />
          </span>
        </div>
        <section className="proyect__single__bar-chart">
          <Chart
            chartType="ColumnChart"
            data={[["Marca", "CO2 emitido (kg)"], ...dataCO2]}
            options={{
              title: "Dencidad de emision de CO2 por marca",
              width: 600,
              height: 600,
              bar: { groupWith: "95%" },
              legend: { position: "none" },
            }}
          />
          <Chart
            chartType="ColumnChart"
            data={[["Marca", "CO2 emitido (kg)"], ...dataCar]}
            options={{
              title: "Dencidad de vehículos registrados",
              width: 600,
              height: 600,
              bar: { groupWith: "95%" },
              legend: { position: "none" },
            }}
          />
        </section>
        <div className="proyect__single__data"></div>
        {/*<h3 className="proyect__single__subtitle">
          Emisión de <CO2Span /> por marca
        </h3>
        <ChartBrand
          forecast_co2={project.totalForecast}
          forecastByBrand={project.forecastByBrand}
        />*/}
        {/*<ChartRecommendation forecast_co2={project.totalForecast} /> */}
      </main>
      <Footer />
    </>
  );
};

export default ProyectSingle;
