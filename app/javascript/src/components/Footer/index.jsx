import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const backToTopArrow = <FontAwesomeIcon icon={faCircleArrowUp} size="2x" />;

const FooterContainer = styled.div`
  background: black;
  color: white;
  height: 27vh;
  position: relative;
`;

const Copyright = styled.div`
  font-size: 11px;
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

const BackToTopArrow = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const FooterTitle = styled.h3`
  text-align: center;
  letter-spacing: 8px;
  font-weight: 400;
  margin: 1.5vh 0 1.5vh 0;
  opacity: 0.9;
`;
const FooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 13px;
  opacity: 0.8;
  margin: 0.5vh;
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FooterContainer>
      <FooterInfoWrapper>
        <FooterTitle>Patricia Prouvost</FooterTitle>
        <FooterLink to="/biographie">Biographie</FooterLink>
        <FooterLink to="/tableaux">Tableaux</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
        <FooterLink to="/livredor">Livre d'or</FooterLink>
      </FooterInfoWrapper>
      <BackToTopArrow onClick={scrollToTop}>{backToTopArrow}</BackToTopArrow>
      <Copyright>©2022 Patricia Prouvost. Tous droits réservés.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
