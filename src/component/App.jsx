import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Forecast from "./forecast/Forecast";
import Proyect from "./proyect/Proyect";
import About from "./about/About.jsx";
import ProyectSingle from "./proyectSingle/ProyectSingle";

export const API = "http://localhost:5000";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Forecast />} />
        <Route path="/proyectos/:project_id" element={<ProyectSingle />} />
        <Route path="/proyectos" element={<Proyect />} />
        <Route path="/sobre-nosotros" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
