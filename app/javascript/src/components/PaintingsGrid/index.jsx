import { format } from "prettier";
import React from "react";
import { Link } from "react-router-dom";

const PaintingsGrid = ({ paintings, year, option, format, price }) => {

  const filterData = (option, year, paintings, format, price) => {
    if (option == "All") {
      return paintings;
    } else if (option == "year") {
      return paintings?.filter((painting) => painting.year == year);
    } else if (option == "format") {
      return paintings?.filter((painting) => painting.format == format);
    } else if (option == "price") {
      if (price == "250") {
        return paintings?.filter(
          (painting) => painting.price < parseInt(price)
        );
      } else if (price == "500") {
        return paintings?.filter(
          (painting) => painting.price < parseInt(price) && painting.price > 250
        );
      } else if (price == "750") {
        return paintings?.filter(
          (painting) => painting.price > parseInt(price)
        );
      }
    }
  };

  const filterPaintings = filterData(option, year, paintings, format, price);

  return (
    <ul>
      {filterPaintings?.map((painting, index) => (
        <Link key={index} to={`/tableaux/${painting.id}`}>
          <h1>{painting.name}</h1>
          <img
            src={require("../../assets/images/" + painting.id + ".jpg")}
            alt={`${painting.name}`}
          />
        </Link>
      ))}
    </ul>
  );
};

export default PaintingsGrid;
