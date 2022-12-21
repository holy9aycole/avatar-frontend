import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Forecast from "./forecast/Forecast";
import Proyect from "./proyect/Proyect";
import About from "./about/About.jsx";
import ProyectSingle from "./proyectSingle/ProyectSingle";
import Car from "./car/Car";
import Login from "./login/Login";

export const API = "http://localhost:5000";

const App = () => {
  const [user, setUser] = useState({ name: "", email: "", type: "" });
  // const [user, setUser] = useState({ name: "Enrique", email: "", type: "" });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/registro" element={<Forecast user={user} />} />
        <Route
          path="/proyectos/:project_id"
          element={<ProyectSingle user={user} />}
        />
        <Route path="/proyectos" element={<Proyect user={user} />} />
        <Route path="/car/:project_id" element={<Car user={user} />} />
        <Route
          path="/login"
          element={
            <Login setUser={(data) => setUser(data)} email={user.email} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
