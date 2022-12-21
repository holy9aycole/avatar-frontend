import React from "react";
import ProyectItem from "./ProyectItem";

const ProyectContainer = ({ projects, cars }) => (
  <section className="proyect__container">
    {projects.length && cars.length
      ? projects.map((project, i) => {
          const _cars = cars.filter((car) => car.period == project.period)[0]
            ? cars.filter((car) => car.period == project.period)[0].cars
            : 0;
          const _co2 = cars.filter((car) => car.period == project.period)[0]
            ? cars.filter((car) => car.period == project.period)[0].co2
            : 0;
          return (
            <ProyectItem
              key={project.period}
              period={project.period}
              co2={_co2}
              cars={_cars}
            />
          );
        })
      : null}
  </section>
);

export default ProyectContainer;
