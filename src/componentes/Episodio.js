import React from "react";
import "../hojas-estilo/episodes.css";

export default function Episodio({ item }) {
  return (
    <div className="info-card-episodes">
      <p>Name Episode:</p>
      <h2>{item.name}</h2>
      <p>Air Date:</p>
      <h2>{item.air_date}</h2>
      <p>Episode:</p>
      <h2>{item.episode}</h2>
    </div>
  );
}
