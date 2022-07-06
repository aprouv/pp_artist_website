import React from "react";
import { Link } from "react-router-dom";

const FilterBy = ({ option, paintings }) => {
  const distinctFormats = [...new Set(paintings?.map((x) => x.format))];
  const distinctYears = [...new Set(paintings?.map((x) => x.year))].sort();

  return (
    <div>
      <form>
        <label>
          {option == "price" ? (
            <ul>
              <li>
                <Link to={"/tableaux?price=250"}>moins de 250€</Link>
              </li>
              <li>
                <Link to={"/tableaux?price=500"}>250€ - 500€</Link>
              </li>
              <li>
                <Link to={"/tableaux?price=750"}>plus de 750€</Link>
              </li>
            </ul>
          ) : option == "format" ? (
            distinctFormats.map((format) => (
              <ul>
                <li key={format.toString()}>
                  <Link to={`/tableaux?format=${format}`} format={format}>
                    {format}
                  </Link>
                </li>
              </ul>
            ))
          ) : option == "All" ? (
            <h2>Tous les tableaux</h2>
          ) : (
            distinctYears.map((year) => (
              <ul>
                <li key={year.toString()}>
                  <Link to={`/tableaux?year=${year}`} year={year}>
                    {year}
                  </Link>
                </li>
              </ul>
            ))
          )}
        </label>
      </form>
    </div>
  );
};

export default FilterBy;
