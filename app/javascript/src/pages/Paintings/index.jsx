import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../utils/hooks";

const Paintings = () => {
  const [paintings] = useFetch("/api/v1/paintings");

  return (
    <div>
      <h1>This is the Paintings#index page for our app.</h1>
      <ul>
        {paintings?.map((painting, index) => (
          <Link key={index} to={`/tableaux/${painting.id}`}>
            <h1>{painting.name}</h1>
          </Link>
        ))}
      </ul>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Paintings;
