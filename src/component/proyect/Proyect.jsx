import React, { useEffect, useState } from "react";
import { API } from "../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ProyectContainer from "./ProyectContainer";
import ProyectHeader from "./ProyectHeader";

const Proyect = () => {
  const [proyects, setProyects] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const proyect = formData.get("proyect");

    console.log({ search: proyect });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const proyect = formData.get("proyect");

    console.log({ create: proyect });
  };

  useEffect(() => {
    fetch(API + "/proyect")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "OK") {
          // setProyects(data.proyects);
          setProyects([]);
        }
      });
  }, []);

  return (
    <>
      <Header />
      <main className="proyect">
        <ProyectHeader
          handleSearch={handleSearch}
          handleCreate={handleCreate}
        />
        <ProyectContainer proyects={proyects} />
      </main>
      <Footer />
    </>
  );
};

export default Proyect;
