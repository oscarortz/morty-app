import React from "react";
import "../App.css";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";

const iconosGenero = {
  male: <FcBusinessman />,
  female: <FcBusinesswoman />,
};

export default function Personaje({ personaje }) {
  return (
    <div className="tarjeta-container">
      <img src={personaje.image} alt={personaje.name} />
      <div className="info-container">
        <h2>{personaje.name}</h2>
        <div className="punto-container">
          <div
            className={
              personaje.status === "Alive"
                ? "verde"
                : personaje.status === "Dead"
                ? "rojo"
                : personaje.status === "unknown"
                ? "negro"
                : ""
            }
          ></div>
          <h4>
            {personaje.status} - {personaje.species}
          </h4>
        </div>
        <p> Last know location</p>
        <h3>{personaje.location.name}</h3>
        <h4>Genero:</h4>
        <h3>
          {personaje.gender === "Male"
            ? iconosGenero.male
            : iconosGenero.female}
        </h3>
      </div>
    </div>
  );
}
