import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function LocationDetail() {
  const [location, setLocation] = useState([]);
  const { id } = useParams();
  console.log(useParams());
  useEffect(() => {
    fetchLocationDetail(id);
  }, []);

  const fetchLocationDetail = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div> </div>;
}

export default LocationDetail;
