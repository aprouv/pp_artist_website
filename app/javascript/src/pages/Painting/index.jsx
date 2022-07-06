import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/hooks";
import { Link } from "react-router-dom";

const Painting = () => {
  const { id: queryId } = useParams();
  const painting = useFetch(`/api/v1/paintings/${queryId}`);
  const element = painting[0];

  return (
    <div>
      <h1>{element?.name}</h1>
      <img
        src={require("../../assets/images/" + queryId + ".jpg")}
        alt={element?.name}
      />
      <p>{element?.description}</p>
      <h6>{element?.format} cm</h6>
      <h6>{element?.year}</h6>
      <h5>{element?.price} €</h5>
      <Link to="/tableaux">Tableaux</Link>
    </div>
  );
};

export default Painting;
