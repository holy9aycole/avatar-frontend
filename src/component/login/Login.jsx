import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { API } from "../App";

const Login = ({ setUser, email }) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });
    fetch(API + "/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "OK") {
          setUser({
            name: data.user.name,
            email: data.user.email,
            type: data.user.type,
          });
        } else if (data.status == "NotFound") {
          setError(data.error);
        }
      });
  };

  return email ? (
    <Navigate to="/" />
  ) : (
    <main className="login">
      <Link to="/" className="login__title">
        AVATAR
      </Link>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form__item">
          <label htmlFor="email" className="login__form__label">
            Correo electrónico
          </label>
          <input type="email" name="email" id="email" required />
          <span className="loging__form__error">{error}</span>
        </div>
        <div className="login__form__item">
          <label htmlFor="password" className="login__form__label">
            Contraseña
          </label>
          <input type="password" name="password" id="password" required />
          <span className="loging__form__error">{error}</span>
        </div>
        <button className="login__form__btn">Acceder</button>
      </form>
    </main>
  );
};

export default Login;
