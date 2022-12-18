import React from "react";
import CO2Span from "./CO2Span";
import CO2Progress from "./CO2Progress";

const HomeContainerCO2 = ({ co2Local, co2Global }) => (
  <section className="home__container__co2">
    <h2 className="container__co2__title">
      Emisión de <CO2Span />
    </h2>
    <span className="container__co2__info">
      {co2Local}kg de {co2Global}kg de <CO2Span /> a nivel mundial
    </span>
    <CO2Progress co2Local={co2Local} co2Global={co2Global} />
  </section>
);

export default HomeContainerCO2;
