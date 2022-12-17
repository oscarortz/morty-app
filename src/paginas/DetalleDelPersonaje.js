import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetalleDelPersonaje() {
  const [personaje, setPersonaje] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPersonaje();
  }, []);

  const getPersonaje = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        console.log(res.data);
        setPersonaje(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <img src={personaje.image} alt={personaje.name} />
      <p>{personaje.name}</p>
      <p>{personaje.status}</p>
      <p>{personaje.species}</p>
      <p>{personaje.gender}</p>
    </div>
  );
}

export default DetalleDelPersonaje;
