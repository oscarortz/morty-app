import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonajeLocacion from "./PersonajeLocacion";

const URL = "https://rickandmortyapi.com/api/location";

export default function PersonajesLocacion() {
  const [locations, setLocations] = useState([]);
  function locationFech() {
    axios
      .get(URL)
      .then((res) => {
        console.log(res);
        setLocations(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    locationFech();
  }, []);

  return (
    <div>
      {locations.map((item, index) => (
        <div key={index}>{<PersonajeLocacion item={item} />}</div>
      ))}
    </div>
  );
}
