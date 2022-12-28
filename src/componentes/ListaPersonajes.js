import React, { useState, useEffect, useContext } from "react";
import Personaje from "./Personaje";
import Filtered from "./Filtered";
import "../App.css";
import { motion } from "framer-motion";
import Paginacion from "./Paginacion";
import AuthContext from "../contexto/AuthContext";

export default function ListaPersonajes() {
  const { auth } = useContext(AuthContext);
  const [personajes, setPersonajes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [genero, setGenero] = useState("");
  const [personajesPorPagina, setPersonajesPorPagina] = useState(4);
  const [paginaActual, setPaginaActual] = useState(1);
  const totalPersonajes = personajes.length;
  const userId = Math.ceil(Math.random() * 42);
  const lastIndex = paginaActual * personajesPorPagina;
  const firstIndex = lastIndex - personajesPorPagina;

  const urlInicial =
    "https://rickandmortyapi.com/api/character/?page=" + userId;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const respuesta = await fetch(urlInicial);
    const data = await respuesta.json();
    setPersonajes(data.results);
    setFiltered(data.results);
    /* console.log(personajes); */
  }

  //console.log(personajes);
  //console.log(auth);
  return (
    <>
      <>
        <Paginacion
          personajesPorPagina={personajesPorPagina}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          totalPersonajes={totalPersonajes}
        />
        <motion.div className="tarjetas-container">
          <motion.div className="botones-filtro">
            <Filtered
              personajes={personajes}
              setFiltered={setFiltered}
              setGenero={setGenero}
              genero={genero}
            />
          </motion.div>

          {filtered.lenght === 0
            ? "CARGANDO"
            : filtered
                .map((personaje) => {
                  return (
                    <motion.div key={personaje.id}>
                      <Personaje personaje={personaje} />
                    </motion.div>
                  );
                })
                .slice(firstIndex, lastIndex)}
        </motion.div>
        <Paginacion
          personajesPorPagina={personajesPorPagina}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          totalPersonajes={totalPersonajes}
        />
      </>
    </>
  );
}
