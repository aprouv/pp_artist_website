import React, { useState } from "react";
import FilterMenu from "../../components/FilterMenu";
import useFetch from "../../utils/hooks";
import PaintingsGrid from "../../components/PaintingsGrid";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Quote = styled.div`
  font-weight: 100;
  line-height: 39px;
  text-align: center;
  border: thick double black;
  height: 103px;
  margin: 0 20px 20px 20px;
  @media only screen and (min-width: 768px) {
    padding: 10px 17px;
    font-size: 20px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 24px;
    padding: 10px 17px;
  }
  @media only screen and (min-width: 1250px) {
    padding: 10px 56px;
    font-size: 28px;
  }
`;

const QuotationMarks = styled.span`
  color: white;
  font-weight: 400;
  font-size: 30px;
`;

const QuoteWrapper = styled.div`
  padding-top: 3%;
`;

const PaintingsWrapper = styled.div`
  margin: 0px 20px 20px 20px;
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
    <div style={{ margin: "0px" }}>
      <QuoteWrapper>
        <Quote>
          <QuotationMarks>"</QuotationMarks> Si la toile émeut, plaît,
          interroge, dérange, et si de surcroît parfois elle peut véhiculer une
          idée, témoigner, secouer des idées, alors le peintre peut être
          satisfait. <QuotationMarks>"</QuotationMarks>
        </Quote>
      </QuoteWrapper>
      <PaintingsWrapper>
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
      </PaintingsWrapper>
    </div>
  );
};

export default Paintings;
