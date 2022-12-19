import React from "react";
import "../App.css";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";

const iconosGenero = {
  male: <FcBusinessman />,
  female: <FcBusinesswoman />,
};

export default function Personaje({ personaje }) {
  return (
    <div className="tarjeta-container">
      <Link to={`/detallePersonaje/${personaje.id}`}>
        <img src={personaje.image} alt={personaje.name} />
      </Link>

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
        <h3>Location</h3>
        <Link to={`/locationDetail/${personaje.location.url}`}>
          <p>{personaje.location.name}</p>
        </Link>
      </div>
    </div>
  );
}
