import React, { useState, useEffect } from "react";
import { Await, useParams } from "react-router-dom";
import axios from "axios";

const EpisodiosDelPersonaje = () => {
  const [episodios, setEpisodios] = useState([]);

  const { id } = useParams();
  console.log(id);

  const url = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    fetchEpisodios(url);
  }, []);

  const fetchEpisodios = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setEpisodios(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {episodios.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.air_date}</p>
            <p>{item.episode}</p>
          </div>
        );
      })}
    </div>
  );
};

export default EpisodiosDelPersonaje;
