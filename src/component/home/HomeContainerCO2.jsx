import React from "react";
import CO2Span from "./CO2Span";
import CO2Progress from "./CO2Progress";

const HomeContainerCO2 = ({ co2Local, co2Global }) => (
  <section className="home__container__co2">
    <h2 className="container__co2__title">
      Los vehículos. Agentes contaminantes de <CO2Span />
    </h2>
    <span className="container__co2__info">
      Emisión local: {co2Local}kg de <CO2Span />
    </span>
    <CO2Progress co2Local={co2Local} co2Global={co2Global} />
    <span className="container__co2__text">de emisón a nivel mundial</span>
  </section>
);

export default HomeContainerCO2;
