import React from "react";

const CO2Progress = ({ co2Local, co2Global }) => {
  /* porcentaje de co2 emitido por nuestro pais */
  const co2Percentage = ((co2Local / co2Global) * 100).toFixed(2);

  const background = "#3c9962";
  const backgroundActive = "#000";

  return (
    <div className="co2__progress">
      <div
        className="co2__progress__percentage"
        style={{
          backgroundImage: `conic-gradient(
            ${backgroundActive} ${co2Percentage}deg,
            ${background} 0deg)`,
        }}
      >
        <div className="co2__progress__value">{co2Percentage}%</div>
      </div>
    </div>
  );
};

export default CO2Progress;
