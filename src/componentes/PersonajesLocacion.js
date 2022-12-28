import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonajeLocacion from "./PersonajeLocacion";
import "../hojas-estilo/PersonajeLocacion.css";

const urlInitial = "https://rickandmortyapi.com/api/location";

export default function PersonajesLocacion() {
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState([]);
  function locationFech(url) {
    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setLocations(res.data.results);
        setInfo(res.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //console.log(info);

  useEffect(() => {
    locationFech(urlInitial);
  }, []);
  const onPrev = (e) => {
    locationFech(info.prev);
  };
  const onNext = (e) => {
    locationFech(info.next);
  };

  return (
    <div>
      <div className="div-botones-location">
        <button onClick={onPrev} disabled={info.prev === null ? true : false}>
          prev
        </button>
        <button onClick={onNext} disabled={info.next === null ? true : false}>
          next
        </button>
      </div>

      <div className="div-location-card">
        {locations.map((item, index) => (
          <div key={index}>{<PersonajeLocacion item={item} />}</div>
        ))}
      </div>
      <div className="div-botones-location">
        <button onClick={onPrev} disabled={info.prev === null ? true : false}>
          prev
        </button>
        <button onClick={onNext} disabled={info.next === null ? true : false}>
          next
        </button>
      </div>
    </div>
  );
}
