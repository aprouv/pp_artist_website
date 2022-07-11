import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    z-index: 1;
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PaintingsGrid = ({ paintings, year, option, format, price }) => {
  const filterData = (option, year, paintings, format, price) => {
    if (option == "all") {
      return paintings;
    } else if (option == "year") {
      return paintings?.filter((painting) => painting.year == year);
    } else if (option == "format") {
      return paintings?.filter((painting) => painting.format == format);
    } else if (option == "price") {
      if (price == "500") {
        return paintings?.filter(
          (painting) => painting.price < parseInt(price)
        );
      } else if (price == "800") {
        return paintings?.filter(
          (painting) => painting.price < parseInt(price) && painting.price > 500
        );
      } else if (price == "1000") {
        return paintings?.filter(
          (painting) => painting.price > parseInt(price)
        );
      }
    }
  };

  const filterPaintings = filterData(option, year, paintings, format, price);
  const filterPaintingsColumns = Math.round(filterPaintings?.length / 3);

  return (
    <CardsContainer>
      <ColumnsContainer>
        {filterPaintings
          ?.slice(0, filterPaintingsColumns)
          .map((painting, index) => (
            <Link key={index} to={`/tableaux/${painting.id}`}>
              <Card name={painting.name} id={painting.id} />
            </Link>
          ))}
      </ColumnsContainer>
      <ColumnsContainer>
        {filterPaintings
          ?.slice(filterPaintingsColumns, filterPaintingsColumns * 2)
          .map((painting, index) => (
            <Link key={index} to={`/tableaux/${painting.id}`}>
              <Card name={painting.name} id={painting.id} />
            </Link>
          ))}
      </ColumnsContainer>
      <ColumnsContainer>
        {filterPaintings
          ?.slice(filterPaintingsColumns * 2, filterPaintings.length)
          .map((painting, index) => (
            <Link key={index} to={`/tableaux/${painting.id}`}>
              <Card name={painting.name} id={painting.id} />
            </Link>
          ))}
      </ColumnsContainer>
    </CardsContainer>
  );
};

export default PaintingsGrid;
