import React, { useEffect, useState } from "react";
import { API } from "../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomeContainer from "./HomeContainer";

const Home = () => {
  /* cantidad de co2 emitido en nuestro pais (en kg) */
  const [co2Local, setCo2Local] = useState(0);
  /* cantidad de co2 emitido a nivel mundial (en kg) */
  const [co2Global, setCo2Global] = useState(10256);
  /*  */
  const [brands, setBrands] = useState([]);
  /*  */
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    fetch(API + "/project/forecast")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setCo2Local(data.project.totalForecast);
        }
      });
  }, []);

  useEffect(() => {
    fetch(API + "/brand/co2")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          console.log(data.brands);
          setBrands(data.brands);
        }
      });
  }, []);

  useEffect(() => {
    fetch(API + "/forecast")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          console.log(data.forecasts);
          setForecasts(data.forecasts);
        }
      });
  }, []);

  return (
    <>
      <Header />
      <HomeContainer
        co2Local={co2Local}
        co2Global={co2Global}
        brands={brands}
        forecasts={forecasts}
      />
      <Footer />
    </>
  );
};

export default Home;
