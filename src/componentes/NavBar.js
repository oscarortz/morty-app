import React from "react";
import { NavLink } from "react-router-dom";
import "../hojas-estilo/NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Characters</NavLink>
      <NavLink to="location">Locations</NavLink>
      <NavLink to="episodios">episodes</NavLink>
    </div>
  );
}

export default NavBar;
