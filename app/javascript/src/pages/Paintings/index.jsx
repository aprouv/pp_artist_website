import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterMenu from "../../components/FilterMenu";
import useFetch from "../../utils/hooks";
import PaintingsGrid from "../../components/PaintingsGrid";
import FilterBy from "../../components/FilterBy";
import { useSearchParams } from "react-router-dom";

const Paintings = () => {
  const [paintings] = useFetch("/api/v1/paintings");
  const [option, selectOption] = useState("All");
  const selectedOption = (e) => selectOption(e.target.value);

  let [searchParams] = useSearchParams();
  let year = searchParams.get("year");
  let format = searchParams.get("format");
  let price = searchParams.get("price");

  return (
    <div>
      <h1>Tableaux</h1>
      <FilterMenu
        onChange={selectedOption}
        option={option}
        paintings={paintings}
      />
      <FilterBy
        onChange={selectedOption}
        option={option}
        paintings={paintings}
      />
      <PaintingsGrid
        paintings={paintings}
        year={year}
        option={option}
        format={format}
        price={price}
      />
      <Link to="/">Home</Link>
    </div>
  );
};

export default Paintings;
