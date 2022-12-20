import React from "react";
import { Link } from "react-router-dom";

const ProyectItem = ({ period }) => (
  <Link to={"/proyectos/" + period} className="proyect__item">
    <figure className="proyect__item__figure">
      <img src="/arbol.png" alt="" />
    </figure>
    <h3 className="proyect__item__period">{period}</h3>
  </Link>
);

export default ProyectItem;
