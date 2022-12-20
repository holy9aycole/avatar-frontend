import React from "react";
import { Link } from "react-router-dom";

const ForecastResult = ({ carType, carRegistration, period }) => (
  <section className="forecast__result">
    <h3 className="forecast__result__title">{carType}</h3>
    <span className="forecast__result__text">
      Vehículo de matrícula {carRegistration} registrado
    </span>
    <Link className="forecast__result__link" to={"/proyectos/" + period}>
      Ver projecto {period}
    </Link>
  </section>
);

export default ForecastResult;
