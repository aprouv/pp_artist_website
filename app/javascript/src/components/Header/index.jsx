import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";
import Pp from "../../assets/images/patricia_prouvost.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuList from "../MenuList/index.jsx";

const element = <FontAwesomeIcon icon={faBars} size="2x" />;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 110px;
  box-shadow: 0 4px 6px -6px #222;
  position: sticky;
  top: 0;
  background: white;
  z-index: 3;
  @media only screen and (max-width: 768px) {
    height: 14vh;
    justify-content: space-between;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 19px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
  padding-bottom: 3px;
  margin: auto;
  display: block;
`;

const StyledLink = styled(Link)`
  padding: 10px 5px;
  color: ${colors.secondary};
  text-decoration: none;
  text-align: center;
  opacity: 0.7;
  &:active {
    opacity: 0.2;
  }
  &:hover {
    opacity: 0.4;
  }
`;

const HeaderLogo = styled.div`
  width: 20%;
  @media only screen and (max-width: 768px) {
    width: 25vh;
  }
`;

const Name = styled.div`
  text-align: center;
  opacity: 0.7;
  padding-top: 2px;
  letter-spacing: 4.5px;
  border-top: 1px solid ${colors.tertiary};
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    font-size: 9px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

const StaticLinks = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const PaintingsLink = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [isBurgerButtonClicked, setIsBurgerButtonClicked] = useState(false);
  const handleButtonClick = () => {
    isBurgerButtonClicked
      ? setIsBurgerButtonClicked(false)
      : setIsBurgerButtonClicked(true);
  };

  return (
    <div>
      <NavContainer>
        <StaticLinks>
          <StyledLink to="/biographie">Biographie</StyledLink>
          <StyledLink to="/tableaux">Tableaux</StyledLink>
        </StaticLinks>
        <HeaderLogo>
          <Link to="/">
            <Logo src={Pp} />
          </Link>
          <Name>Patricia Prouvost</Name>
        </HeaderLogo>
        <span onClick={handleButtonClick}>{element}</span>
        <PaintingsLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <StyledLink to="/livredor">Livre d'or</StyledLink>
        </PaintingsLink>
      </NavContainer>
      {isBurgerButtonClicked && <MenuList onClick={handleButtonClick} />}
    </div>
  );
};

export default Header;
