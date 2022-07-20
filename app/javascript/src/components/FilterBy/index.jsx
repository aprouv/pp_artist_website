import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const OptionButton = styled.div`
  border: 1px solid #adadad;
  border-radius: 11px;
  margin: 10px;
  padding: 7px;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const OptionAll = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-weight: lighter;
`;

const StyledLink = styled(Link)`
  color: #adadad;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: white;
  }
`;

const FilterBy = ({ option, paintings }) => {
  const distinctFormats = [...new Set(paintings?.map((x) => x.format))];
  const distinctYears = [...new Set(paintings?.map((x) => x.year))].sort();

  return (
    <div>
      {option == "price" ? (
        <OptionsWrapper>
          <StyledLink to={"/tableaux?price=500"}>
            <OptionButton>moins de 500€</OptionButton>
          </StyledLink>

          <StyledLink to={"/tableaux?price=800"}>
            <OptionButton>500€ - 800€</OptionButton>
          </StyledLink>

          <StyledLink to={"/tableaux?price=1000"}>
            <OptionButton>plus de 1000€</OptionButton>
          </StyledLink>
        </OptionsWrapper>
      ) : option == "format" ? (
        <OptionsWrapper>
          {distinctFormats.map((format) => (
            <StyledLink
              to={`/tableaux?format=${format}`}
              key={format.toString()}
              format={format}
            >
              <OptionButton>{format}</OptionButton>
            </StyledLink>
          ))}
        </OptionsWrapper>
      ) : option == "all" ? (
        <OptionAll>Tous les tableaux</OptionAll>
      ) : (
        <OptionsWrapper>
          {distinctYears.map((year) => (
            <StyledLink
              to={`/tableaux?year=${year}`}
              key={year.toString()}
              year={year}
            >
              <OptionButton>{year}</OptionButton>
            </StyledLink>
          ))}{" "}
        </OptionsWrapper>
      )}
    </div>
  );
};

export default FilterBy;
