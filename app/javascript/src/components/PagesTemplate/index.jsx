import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";

const PagesContainer = styled.div`
  min-height: 100vh;
  margin: 0px 20px 20px 20px;
`;

const PagesTemplate = () => {
  return (
    <div>
      <Header />
      <PagesContainer>
        <Outlet />
      </PagesContainer>
      <Footer />
    </div>
  );
};

export default PagesTemplate;
