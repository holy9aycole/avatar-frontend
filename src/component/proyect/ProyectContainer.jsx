import React from "react";
import ProyectItem from "./ProyectItem";

const ProyectContainer = ({ projects }) => (
  <section className="proyect__container">
    {projects &&
      projects.map((project) => (
        <ProyectItem key={project.period} period={project.period} />
      ))}
  </section>
);

export default ProyectContainer;
