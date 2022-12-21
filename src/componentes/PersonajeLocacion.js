import React from "react";
import "../hojas-estilo/PersonajeLocacion.css";

function PersonajeLocacion({ item }) {
  return (
    <div className="contenedor-locacion">
      <div className="div-name-location">
        <h2>Name location: "{item.name}"</h2>
      </div>

      <h2>Type location: "{item.type}"</h2>

      <h2>Dimension: "{item.dimension}"</h2>
    </div>
  );
}

export default PersonajeLocacion;
