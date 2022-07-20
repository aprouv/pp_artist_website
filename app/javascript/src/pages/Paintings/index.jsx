import React, { useState } from "react";
import FilterMenu from "../../components/FilterMenu";
import useFetch from "../../utils/hooks";
import PaintingsGrid from "../../components/PaintingsGrid";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const Quote = styled.div`
  font-weight: 100;
  line-height: 39px;
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
  border: thick double black;
  height: 103px;
  padding-top: 10Px;
  margin-top: 43px;
`;

const QuotationMarks = styled.span`
  color: ${colors.tertiary};
  font-weight: 400;
  font-size: 30px;
`;

const Paintings = () => {
  const [paintings] = useFetch("/api/v1/paintings");
  const [option, selectOption] = useState("all");
  const selectedOption = (value) => {
    const option = value.value;
    selectOption(option);
  };

  let [searchParams] = useSearchParams();
  let year = searchParams.get("year");
  let format = searchParams.get("format");
  let price = searchParams.get("price");

  return (
    <div>
      <Quote>
        <QuotationMarks>"</QuotationMarks> Si la toile émeut, plaît, interroge,
        dérange, et si de surcroît parfois elle peut véhiculer une idée,
        témoigner, <br />
        secouer des idées, alors le peintre peut être satisfait.{" "}
        <QuotationMarks>"</QuotationMarks>
      </Quote>
      <FilterMenu
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
    </div>
  );
};

export default Paintings;
