import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <Link to="/" className="header__logo">
      AVATAR
    </Link>
    <nav className="header__nav">
      <NavLink
        className={({ isActive }) =>
          isActive == true ? "header__nav__link active" : "header__nav__link"
        }
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive == true ? "header__nav__link active" : "header__nav__link"
        }
        to="/pronostico"
      >
        Nuevo pronóstico
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive == true ? "header__nav__link active" : "header__nav__link"
        }
        to="/proyectos"
      >
        Proyectos
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive == true ? "header__nav__link active" : "header__nav__link"
        }
        to="/sobre-nosotros"
      >
        Sobre nosotros
      </NavLink>
    </nav>
  </header>
);

export default Header;
