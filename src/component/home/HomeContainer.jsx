import React from "react";
import HomeContainerCO2 from "./HomeContainerCO2";
import HomeContainerMap from "./HomeContainerMap";

const HomeContainer = ({ co2Local, co2Global, brands, forecasts }) => (
  <main className="home__container">
    {co2Local && <HomeContainerCO2 co2Local={co2Local} co2Global={co2Global} />}
    <figure className="home__container__figure">
      <img src="/poster.jpg" alt="" />
    </figure>
    <section className="home__container__brand">
      {brands.map((brand) => (
        <div key={brand.name} className="container__brand__item">
          <h3 className="container__brand__name">{brand.name}</h3>
          <span className="container__brand__co2">
            {brand.co2}
            <span>g/km</span>
          </span>
        </div>
      ))}
    </section>
    <HomeContainerMap forecasts={forecasts} />
  </main>
);

export default HomeContainer;
