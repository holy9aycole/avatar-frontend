import React, { useEffect, useState } from "react";
import { API } from "../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ProyectContainer from "./ProyectContainer";
import ProyectHeader from "./ProyectHeader";

const Proyect = () => {
  const [projects, setProjects] = useState([]);
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
        <ProyectContainer projects={projects} />
      </main>
      <Footer />
    </>
  );
};

export default Proyect;
