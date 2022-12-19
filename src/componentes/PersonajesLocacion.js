import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonajeLocacion from "./PersonajeLocacion";

const urlInitial = "https://rickandmortyapi.com/api/location";

export default function PersonajesLocacion() {
  const [locations, setLocations] = useState([]);
  function locationFech(url) {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setLocations(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    locationFech(urlInitial);
  }, []);

  return (
    <div>
      {locations.map((item, index) => (
        <div key={index}>{<PersonajeLocacion item={item} />}</div>
      ))}
    </div>
  );
}
