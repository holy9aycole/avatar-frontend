import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import CO2Span from "../home/CO2Span";

const Car = () => {
  const { pathname } = useLocation();
  const period = pathname.substring(pathname.lastIndexOf("/") + 1);

  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(API + "/car?period=" + period)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setCars(data.cars);
          console.log(data.cars);
        }
      });
  }, []);

  console.log(cars);

  return (
    <>
      <Header />
      <main className="car">
        <div className="car__header">
          <h2 className="car__title">Vehículos del periodo {period}</h2>
          <span className="car__count">
            {cars.length} vehículos registrados
          </span>
        </div>
        <section className="car__container">
          <h3 className="car__container__subtitle"></h3>
          <h3 className="car__container__subtitle">Nombre del conductor</h3>
          <h3 className="car__container__subtitle">Número de matrícula</h3>
          <h3 className="car__container__subtitle">Marca</h3>
          <h3 className="car__container__subtitle">Kilómetros</h3>
          <h3 className="car__container__subtitle">
            Emisión de <CO2Span /> (kg)
          </h3>
          {cars.map((car) => (
            <React.Fragment key={car.car_id}>
              <input type="checkbox" name="car" id={car.car_id} />
              <label htmlFor={car.car_driver}>{car.car_driver}</label>
              <label htmlFor={car.car_registration}>{car.car_driver}</label>
              <label htmlFor={car.car_brand}>{car.car_driver}</label>
              <label htmlFor={car.car_km}>{car.car_km}</label>
              <label htmlFor={car.car_co2}>{car.car_co2}</label>
            </React.Fragment>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Car;
