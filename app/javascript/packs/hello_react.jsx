import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Paintings from "../src/pages/Paintings";
import Painting from "../src/pages/Painting";
import Biography from "../src/pages/Biography";
import Contact from "../src/pages/Contact";
import styled from "styled-components";
import HomeTemplate from "../src/components/HomeTemplate";
import PagesTemplate from "../src/components/PagesTemplate";

const GlobalStyle = styled.div`
  * {
    font-family: "Roboto Flex", sans serif;
  }
  font-weight: 100;
  margin: 0px;
`;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <BrowserRouter>
      <GlobalStyle>
        <Routes>
          <Route path="" element={<PagesTemplate />}>
            <Route path="biographie" element={<Biography />} />
            <Route path="contact" element={<Contact />} />
            <Route path="tableaux" element={<Paintings />} />
            <Route path="tableaux/:id" element={<Painting />} />
          </Route>
          <Route exact path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </GlobalStyle>
    </BrowserRouter>,
    document.body.appendChild(document.createElement("div"))
  );
});
