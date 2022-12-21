import React from "react";
import { Link } from "react-router-dom";
import CO2Span from "../home/CO2Span";

const ProyectItem = ({ period, cars, co2 }) => (
  <Link to={"/proyectos/" + period} className="proyect__item">
    <figure className="proyect__item__figure">
      <img src="/arbol.png" alt="" />
    </figure>
    <h3 className="proyect__item__period">{period}</h3>
    {cars ? (
      <span className="proyect__item__span">{cars} vehículos</span>
    ) : null}
    {co2 ? (
      <span className="proyect__item__span">
        {co2} kg de <CO2Span />
      </span>
    ) : null}
  </Link>
);

export default ProyectItem;
