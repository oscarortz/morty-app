import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../contexto/AuthContext";

function DetalleDelPersonaje() {
  const [personaje, setPersonaje] = useState({});
  const { id } = useParams();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    getPersonaje();
  }, []);

  const getPersonaje = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setPersonaje(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {!auth ? (
        <Navigate to="/" />
      ) : (
        <>
          {personaje.length === 0 ? (
            "CARGANDO..."
          ) : (
            <div>
              <img src={personaje.image} alt={personaje.name} />
              <p>{personaje.name}</p>
              <p>{personaje.status}</p>
              <p>{personaje.species}</p>
              <p>{personaje.created}</p>
              <p>{personaje.gender}</p>
              <p>{personaje.episode}</p>
              <p>{personaje.id}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default DetalleDelPersonaje;
