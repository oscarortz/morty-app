import React from "react";

export default function Episodio({ item }) {
  return (
    <div>
      <p>Name Episode</p>
      <h2>{item.name}</h2>
      <p>Air Date</p>
      <h2>{item.air_date}</h2>
      <p>Episode</p>
      <h2>{item.episode}</h2>
    </div>
  );
}
