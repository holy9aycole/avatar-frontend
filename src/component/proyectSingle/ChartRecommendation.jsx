import React from "react";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";

const ChartRecommendation = ({ forecast_co2 }) => {
  const kgco2_plan = 0.45; /* kg de co2 que puede absorbar un planta, en promedio */
  let quantity = Math.ceil(forecast_co2 / kgco2_plan) || 0;

  let rest;
  const thresholder = 140;

  if (quantity > thresholder) {
    rest = quantity - thresholder;
    quantity = thresholder;
  }

  return (
    <div className="chart__recommendation">
      <div className="chart__recommendation__container">
        <div className="chart__recommendation__car">
          <figure className="chart__recommendation__figure">
            <span className="chart__recommendation__title">Coche</span>
            {(forecast_co2 / 365).toFixed(2)}kg/día
          </figure>
          <TbArrowBigRightLines className="chart__recommendation__icon" />
        </div>
        <div className="chart__recommendation__plan">
          <TbArrowBigLeftLines className="chart__recommendation__icon" />
          <figure className="chart__recommendation__figure">
            <span className="chart__recommendation__title">Planta</span>
            0.46kg/día
          </figure>
        </div>
      </div>
      <div className="chart__recommendation__plans">
        {[...new Array(quantity)].map((_, i) => (
          <img src="/arbol.png" alt="" key={i} />
        ))}
      </div>
      {rest && (
        <span className="chart__recommendation__rest">
          + {rest}
          <img src="/arbol.png" alt="" />
        </span>
      )}
    </div>
  );
};

export default ChartRecommendation;
