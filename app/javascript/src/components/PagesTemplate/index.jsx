import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../Header";
import styled from "styled-components";

const Container = styled.div`
margin: 0px 20px 20px 20px;
`

const PagesTemplate = () => {
  return (
    <div>
      <Header />
      <Container>
      <Outlet />
      </Container>
    </div>
  )
}

export default PagesTemplate
