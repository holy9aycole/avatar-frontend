import React from "react";
import HomeContainerCO2 from "./HomeContainerCO2";
import HomeContainerMap from "./HomeContainerMap";

const HomeContainer = ({ co2Local, co2Global }) => (
  <main className="home__container">
    <HomeContainerCO2 co2Local={co2Local} co2Global={co2Global} />
    <HomeContainerMap />
  </main>
);

export default HomeContainer;
