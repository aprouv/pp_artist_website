import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Paintings from "../src/pages/Paintings";
import Painting from "../src/pages/Painting";
import Biography from "../src/pages/Biography";
import Contact from "../src/pages/Contact";
import styled from "styled-components";
import HomeTemplate from "../src/components/HomeTemplate";
import PagesTemplateWhite from "./components/PagesTemplateWhite";

const GlobalStyle = styled.div`
  * {
    font-family: "Roboto Flex", sans serif;
  }
  font-weight: 100;
  margin: 0px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Routes>
          <Route path="" element={<PagesTemplateWhite />}>
            <Route path="tableaux" element={<Paintings />} />
            <Route path="biographie" element={<Biography />} />
            <Route path="contact" element={<Contact />} />
            <Route path="tableaux/:id" element={<Painting />} />
          </Route>
          <Route exact path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
};

export default App;
