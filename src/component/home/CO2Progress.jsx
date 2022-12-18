import React from "react";

const CO2Progress = ({ co2Local, co2Global }) => {
  /* porcentaje de co2 emitido por nuestro pais */
  const co2Percentage = (co2Local / co2Global) * 100;

  const background = "#168AAF";
  const backgroundActive = "red";

  return (
    <div className="co2__progress">
      <div
        className="co2__progress__percentage"
        style={{
          backgroundImage: `conic-gradient(
            ${background} ${co2Percentage}deg,
            #ccc 0deg)`,
        }}
      >
        <div className="co2__progress__value">{co2Percentage}%</div>
      </div>
    </div>
  );
};

export default CO2Progress;
