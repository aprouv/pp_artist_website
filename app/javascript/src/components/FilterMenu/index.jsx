import React from "react";
import FilterBy from "../FilterBy";

const FilterMenu = ({ onChange, option, paintings, onClick, year }) => {
  return (
    <div>
      <h3>Filtrer par</h3>
      <form>
        <label>
          <select value={option} onChange={onChange}>
            <option value="all">All</option>
            <option value="price">Price</option>
            <option value="format">Format</option>
            <option value="year">Year</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default FilterMenu;
