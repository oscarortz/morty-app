import React from "react";
import "../App.css";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";

const iconosGenero = {
  male: <FcBusinessman />,
  female: <FcBusinesswoman />,
};

export default function Personaje({ personaje }) {
  let url = personaje.location.url;
  let newUrl = url.split("/");
  let urlFragment = newUrl.slice(5, 6);
  let episodios = personaje.episode.map((item) => item.slice(40, 43));
  let episodiosUnidos = episodios.join(", ");
  console.log(episodios);
  return (
    <div className="tarjeta-container">
      <Link to={`/detallePersonaje/${personaje.id}`}>
        <img src={personaje.image} alt={personaje.name} />
      </Link>

      <div className="info-container">
        <div className="div-nombre">
          <h2>{personaje.name}</h2>
        </div>

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
        <div className="div-last-now">
          <p> Last know location</p>
        </div>
        <div className="div-location-name">
          <h3>{personaje.location.name}</h3>
        </div>
        <div className="div-genero">
          <h4>Genero:</h4>
        </div>

        <p>
          {personaje.gender === "Male"
            ? iconosGenero.male
            : iconosGenero.female}
        </p>
        <h3>Location</h3>
        <Link to={`locationDetail/${urlFragment}`}>
          <p>{personaje.location.name}</p>
        </Link>
        <Link to={`/episodiosDelPersonaje/${episodiosUnidos}`}>
          <p>Episodios donde aparece</p>
        </Link>

        <p>{episodiosUnidos}</p>
      </div>
    </div>
  );
}
