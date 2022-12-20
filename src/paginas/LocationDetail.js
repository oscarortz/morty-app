import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useMatch } from "react-router-dom";

function LocationDetail() {
  const [location, setLocation] = useState([]);

  const { id } = useParams();

  const url = `https://rickandmortyapi.com/api/location/${id}`;
  useEffect(() => {
    fetchLocationDetail(url);
  }, []);
  console.log(id);
  const fetchLocationDetail = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h3>ID</h3>
      <div> {location.id}</div>
      <h3>Name</h3>
      <div> {location.name}</div>
      <h3>Type</h3>
      <div> {location.type}</div>
      <h3>Dimention</h3>
      <div> {location.dimension}</div>
      <h3>Created</h3>
      <div> {location.created}</div>
    </>
  );
}

export default LocationDetail;
