import React from "react";
import { BiSearch } from "react-icons/bi";

const ProyectHeader = ({ handleSearch, handleCreate }) => (
  <div className="proyect__header">
    <form className="proyect__header__search" onSubmit={handleSearch}>
      <input type="search" name="proyect" id="proyect" />
      <BiSearch className="icon" />
    </form>
    <form className="proyect__header__create" onSubmit={handleCreate}>
      <input type="text" className="proyect__header__input" name="proyect" />
      <button className="proyect__header__btn">Crear</button>
    </form>
  </div>
);

export default ProyectHeader;
