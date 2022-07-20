import React from "react";
import styled from "styled-components";
import Select from "react-select";
import FilterBy from "../FilterBy";

const FilterWrapper = styled.div`
  width: 15%;
  opacity: 0.8;
`;

const FilterTitle = styled.div`
  font-weight: lighter;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const FilterContainer = styled.div`
  height: 102px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: "30px",
    minHeight: "30px",
    border: state.isFocused ? "1px solid #ADADAD" : "1px solid #ADADAD",
    // This line disable the blue border
    boxShadow: state.isFocused ? "1px 1px 1px 1px rgba(0, 0, 0, 0.90)" : 0,
    "&:hover": {
      border: state.isFocused ? "1px solid #ADADAD" : "1px solid #ADADAD",
    },
    fontSize: "13px",
    padding: 0,
  }),
  option: () => ({
    fontSize: "13px",
    padding: "2px",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.90)",
      color: "white",
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "30px",
  }),
};

const FilterMenu = ({ onChange, option, selectedOption, paintings }) => {
  const options = [
    { value: "all", label: "Tous les tableaux" },
    { value: "price", label: "Prix" },
    { value: "format", label: "Format" },
    { value: "year", label: "Année de création" },
  ];
  return (
    <FilterContainer>
      <FilterWrapper>
        <FilterTitle>Filtrer par</FilterTitle>
        <Select
          styles={customStyles}
          options={options}
          onChange={onChange}
          value={option}
        />
      </FilterWrapper>
      <FilterBy
        onChange={selectedOption}
        option={option}
        paintings={paintings}
      />
    </FilterContainer>
  );
};

export default FilterMenu;
