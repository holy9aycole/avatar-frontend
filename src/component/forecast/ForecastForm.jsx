import React, { useEffect, useState } from "react";
import CO2Span from "../home/CO2Span";
import { API } from "../App";

const ForecastForm = ({ handleSubmit }) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    console.log({ API: API + "/brand" });
    fetch(API + "/brand")
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "OK") setBrands(data.brands);
        setBrands((prev) => ["- marca -", ...prev]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <form className="forecast__form" onSubmit={handleSubmit}>
      <h2 className="forecast__form__title">
        Prognóstico de emisión de <CO2Span /> por vehículo:
      </h2>
      <div className="forecast__form__container">
        <div className="forecast__form__item">
          <label htmlFor="driver" className="forecast__form__label">
            Nombre completo del conductor:
          </label>
          <input
            type="text"
            name="driver"
            id="driver"
            placeholder="nombre completo"
          />
        </div>
        <div className="forecast__form__item">
          <label htmlFor="carRegistration" className="forecast__form__label">
            Número de matrícula del coche:
          </label>
          <input
            type="text"
            name="carRegistration"
            id="carRegistration"
            placeholder="matrícula"
          />
        </div>
        <div className="forecast__form__item">
          <label htmlFor="carType" className="forecast__form__label">
            Tipo de coche:
          </label>
          <select name="carType" id="carType">
            {brands.map((brand) => (
              <option value={brand} key={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div className="forecast__form__item">
          <label htmlFor="km" className="forecast__form__label">
            Kilómetros recorridos durante el último año:
          </label>
          <input type="text" name="km" id="km" placeholder="kilómetros" />
        </div>
        <div className="forecast__form__item">
          <label htmlFor="lifetime" className="forecast__form__label">
            Tiempo de vida del coche (en años):
          </label>
          <input
            type="text"
            name="lifetime"
            id="lifetime"
            placeholder="Tiempo de vida"
          />
        </div>
        <button className="forecast__form__btn">
          Pronosticar <CO2Span />
        </button>
      </div>
    </form>
  );
};

export default ForecastForm;
