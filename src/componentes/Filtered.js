import React, { useEffect } from "react";
import {
  FcBusinesswoman,
  FcBusinessman,
  FcConferenceCall,
} from "react-icons/fc";
import Button from "./StyledButton";
import "../App.css";

export default function Filtered({
  personajes,
  setFiltered,
  setGenero,
  genero,
}) {
  useEffect(() => {
    if (genero === "Todos") {
      setFiltered(personajes);
      return;
    }
    const filtered = personajes.filter((personaje) =>
      personaje.gender.includes(genero)
    );
    setFiltered(filtered);
  }, [genero]);

  return (
    <div className="boton-filtrar">
      <button
        className={genero === "Todos" ? "clickTodos" : "normal"}
        onClick={() => setGenero("Todos")}
      >
        <FcConferenceCall />
      </button>
      <button
        className={genero === "Female" ? "clickFemale" : ""}
        onClick={() => setGenero("Female")}
      >
        <FcBusinesswoman />
      </button>
      <button
        className={genero === "Male" ? "clickMale" : "normal"}
        onClick={() => setGenero("Male")}
      >
        <FcBusinessman />
      </button>

      <Button />
    </div>
  );
}
