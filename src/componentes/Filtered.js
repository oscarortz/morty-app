import React, { useState, useEffect } from "react";
export default function Filtered({
  personajes,
  setPersonajes,
  setFiltered,
  setGenero,
  genero,
  filtered,
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
      <button onClick={() => setGenero("Todos")}>Todos</button>
      <button onClick={() => setGenero("Male")}>Male</button>
      <button onClick={() => setGenero("Female")}>Female</button>
    </div>
  );
}
