import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: black;
  color: white;
  height: 50px;
  position: relative;
`;

const Copyright = styled.div`
  font-size: 11px;
  position: absolute;
  bottom: 2px;
  right: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>©2022 Patricia Prouvost. Tous droits réservés.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
