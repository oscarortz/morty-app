import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Episodio from "./Episodio";
import PaginacionEpisodes from "./PaginacionEpisodes";
import "../hojas-estilo/episodes.css";
import AuthContext from "../contexto/AuthContext";

const initialUrl = "https://rickandmortyapi.com/api/episode";

export default function Episodes() {
  const { auth } = useContext(AuthContext);
  const [episodios, setEpisodios] = useState([]);
  const [info, setInfo] = useState({});

  const fetchEpisodes = (url) => {
    axios
      .get(url)
      .then((resp) => {
        //console.log(resp);
        setEpisodios(resp.data.results);
        setInfo(resp.data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function onPrev() {
    fetchEpisodes(info.prev);
  }
  function onNext() {
    fetchEpisodes(info.next);
  }
  useEffect(() => {
    fetchEpisodes(initialUrl);
  }, []);

  return (
    <div>
      <>
        <PaginacionEpisodes
          onPrev={onPrev}
          onNext={onNext}
          prev={info.prev}
          next={info.next}
        />
        <div className="div-container-episodes">
          {episodios.map((item, index) => (
            <div key={index} className="episodios-card">
              <Episodio item={item} />
            </div>
          ))}
        </div>
        <PaginacionEpisodes
          onPrev={onPrev}
          onNext={onNext}
          prev={info.prev}
          next={info.next}
        />
      </>
    </div>
  );
}
