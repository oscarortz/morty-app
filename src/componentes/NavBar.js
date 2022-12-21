import React from "react";
import { NavLink } from "react-router-dom";
import "../hojas-estilo/NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="location">Character Location</NavLink>
      <NavLink to="episodios">episodes</NavLink>
    </div>
  );
}

export default NavBar;
