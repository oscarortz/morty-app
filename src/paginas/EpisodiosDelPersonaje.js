import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EpisodiosDelPersonaje = () => {
  const [episodios, setEpisodios] = useState([]);

  const { id } = useParams();
  //console.log(id);

  const url = `https://rickandmortyapi.com/api/episode/${id}`;

  const fetchEpisodios = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        setEpisodios(res.data);
        console.log(episodios);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchEpisodios(url);
  }, [url]);

  console.log(typeof episodios);
  console.log(Array.isArray(episodios));
  return (
    <>
      {Array.isArray(episodios) === false ? (
        <div>
          <p>ID:</p>
          <p>{episodios.id}</p>
          <p>NAME:</p>
          <p>{episodios.name}</p>
          <p>AIR DATE:</p>
          <p>{episodios.air_date}</p>
          <p>{episodios.episode}</p>
          <p>EPISODE:</p>
        </div>
      ) : (
        episodios.map((item, index) => {
          return (
            <div key={index}>
              <p>ID:</p>
              <p>{item["id"]}</p>
              <p>NAME:</p>
              <p>{item["name"]}</p>
              <p>AIR DATE:</p>
              <p>{item["air_date"]}</p>
              <p>EPISODE:</p>
              <p>{item["episode"]}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default EpisodiosDelPersonaje;
