import React, { useState } from "react";
import { API } from "../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ForecastResult from "./ForecastResult";
import ForecastForm from "./ForecastForm";

const Forecast = () => {
  const [forecasted, setForecasted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const driver = formData.get("driver");
    const carRegistration = formData.get("carRegistration");
    const carType = formData.get("carType");
    const km = formData.get("km");
    const lifetime = formData.get("lifetime");

    console.log({ driver, carRegistration, carType, km, lifetime });
    fetch(API + "/forecast", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ driver, carRegistration, carType, km, lifetime }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setForecasted(true);
        }
      });
  };

  return (
    <>
      <Header />
      {forecasted === false ? (
        <ForecastForm handleSubmit={handleSubmit} />
      ) : (
        <ForecastResult />
      )}
      <Footer />
    </>
  );
};

export default Forecast;
