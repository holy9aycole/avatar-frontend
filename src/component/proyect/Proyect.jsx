import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { API } from "../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ProyectContainer from "./ProyectContainer";
import ProyectHeader from "./ProyectHeader";

const Proyect = ({ user }) => {
  const [projects, setProjects] = useState([]);
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const project = formData.get("project");

    if (project.length === 0) return;

    fetch(API + "/project?project=" + project)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setProjects(data.projects);
          setCars(data.car);
        }
      });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const project = formData.get("project");

    if (project.length === 0) return;

    fetch(API + "/project", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ project }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "OK") setPage(2);
        form.reset();
      });
  };

  useEffect(() => {
    fetch(API + "/project")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          setProjects(data.projects);
          setCars(data.cars);
          console.log(data.projects);
          console.log(data.cars);
        }
      });
  }, [page]);

  return (
    <>
      <Header />
      <main className="proyect">
        <ProyectHeader
          handleSearch={handleSearch}
          handleCreate={handleCreate}
        />
        <ProyectContainer projects={projects} cars={cars} />
      </main>
      <Footer />
    </>
  );
};

export default Proyect;
