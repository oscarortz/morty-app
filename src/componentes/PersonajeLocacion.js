import React from "react";
import "../hojas-estilo/PersonajeLocacion.css";

function PersonajeLocacion({ item }) {
  return (
    <div className="contenedor-locacion">
      <p>Name</p>
      <h2>{item.name}</h2>
      <p>Type</p>
      <h2>{item.type}</h2>
      <p>Dimension</p>
      <h2>{item.dimension}</h2>
    </div>
  );
}

export default PersonajeLocacion;
