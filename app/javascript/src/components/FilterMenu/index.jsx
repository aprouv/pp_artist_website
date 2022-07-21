import React from "react";
import styled from "styled-components";
import Select from "react-select";
import FilterBy from "../FilterBy";

const FilterWrapper = styled.div`
  max-width: 23%;
  z-index: 2;
  @media only screen and (min-width: 1024px) {
    max-width: 19%;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 15%;
  }
`;

const FilterTitle = styled.div`
  font-weight: lighter;
  font-size: 13px;
  color: black;
  margin-bottom: 5px;
`;

const FilterContainer = styled.div`
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
  placeholder: (provided) => ({
    ...provided,
    fontWeight: 300,
    "@media only screen and (min-width: 768px)": {
      ...provided["@media only screen and (max-width: 1200px)"],
      fontSize: "13px",
    },
    "@media only screen and (min-width: 1250px)": {
      ...provided["@media only screen and (max-width: 1200px)"],
      fontSize: "17px",
    },
  }),
};

const FilterMenu = ({ onChange, option, selectedOption, paintings }) => {
  const options = [
    { value: "all", label: "Tous les tableaux" },
    { value: "price", label: "Prix" },
    { value: "format", label: "Format" },
    { value: "year", label: "Année" },
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
          placeholder={options.map((opt) => opt.value === option && opt.label)}
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
