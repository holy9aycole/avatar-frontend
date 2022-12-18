import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Forecast from "./forecast/Forecast";
import Proyect from "./proyect/Proyect";
import About from "./about/About.jsx";

export const API = "http://localhost:5000";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pronostico" element={<Forecast />} />
        <Route path="/proyectos" element={<Proyect />} />
        <Route path="/sobre-nosotros" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
