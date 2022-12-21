import React, { useState } from "react";
import { API } from "../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ForecastResult from "./ForecastResult";
import ForecastForm from "./ForecastForm";
import { Navigate } from "react-router-dom";

const Forecast = ({ user }) => {
  const [forecasted, setForecasted] = useState(false);
  /* cantidad total de coches registrados durante el periodo */
  const [carType, setCarType] = useState("");
  /* cantidad total de coches de la marca especificada registradas durante el periodo */
  const [carRegistration, setCarRegistration] = useState("");
  /*  */
  const [period, setPeriod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const period = formData.get("period");
    const driver = formData.get("driver");
    const carRegistration = formData.get("carRegistration");
    const carType = formData.get("carType");
    const km = formData.get("km");

    console.log({ driver, carRegistration, carType, km });
    fetch(API + "/forecast", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ period, driver, carRegistration, carType, km }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          console.log({ data });
          setForecasted(true);
          setPeriod(period);
          setCarType(carType);
          setCarRegistration(carRegistration);
        }
      });
  };

  return user.name ? (
    <>
      <Header />
      {forecasted === false ? (
        <ForecastForm handleSubmit={handleSubmit} />
      ) : (
        <ForecastResult
          carType={carType}
          carRegistration={carRegistration}
          period={period}
        />
      )}
      <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Forecast;
