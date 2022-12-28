import React from "react";
import { NavLink } from "react-router-dom";
import "../hojas-estilo/NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/listaDePersonajes">Character List</NavLink>
      <NavLink to="location">Character Location</NavLink>
      <NavLink to="episodios">episodes</NavLink>
    </div>
  );
}

export default NavBar;
