import React, { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomeContainer from "./HomeContainer";

const Home = () => {
  /* cantidad de co2 emitido en nuestro pais (en kg) */
  const [co2Local, setCo2Local] = useState(15);
  /* cantidad de co2 emitido a nivel mundial (en kg) */
  const [co2Global, setCo2Global] = useState(500);

  return (
    <>
      <Header />
      <HomeContainer co2Local={co2Local} co2Global={co2Global} />
      <Footer />
    </>
  );
};

export default Home;
