import React, { useState, useEffect } from "react";
import Personaje from "./Personaje";
import Filtered from "./Filtered";
import "../App.css";
import { motion } from "framer-motion";

export default function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [genero, setGenero] = useState("");

  const urlInicial = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const respuesta = await fetch(urlInicial);
    const data = await respuesta.json();
    setPersonajes(data.results);
    setFiltered(data.results);
    console.log(personajes);
  }

  //console.log(personajes);
  return (
    <motion.div className="tarjetas-container">
      <motion.div className="botones-filtro">
        <Filtered
          personajes={personajes}
          setFiltered={setFiltered}
          setGenero={setGenero}
          genero={genero}
        />
      </motion.div>
      {filtered.map((personaje) => {
        return (
          <motion.div key={personaje.id}>
            <Personaje personaje={personaje} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
