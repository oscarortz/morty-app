import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="location">Character Location</Link>
      <Link to="episodios">episodes</Link>
    </div>
  );
}

export default NavBar;
