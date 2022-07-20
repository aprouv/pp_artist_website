import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";
import Pp from "../../assets/images/patricia_prouvost.png";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  font-size: 22px;
  height: 110px;
  box-shadow: 0 4px 6px -6px #222;
  position: sticky;
  top: 0;
  background: white;
  z-index: 3;
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
`;

const Name = styled.div`
  text-align: center;
  opacity: 0.7;
  padding-top: 2px;
  letter-spacing: 4.5px;
  font-size: 18px;
  border-top: 1px solid ${colors.tertiary};
`;

const StaticLinks = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

const PaintingsLink = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`;

const Header = () => {
  return (
    <NavContainer>
      <StaticLinks>
        <StyledLink to="/biographie">Biographie</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StaticLinks>
      <HeaderLogo>
        <Link to="/">
          <Logo src={Pp} />
        </Link>
        <Name>Patricia Prouvost</Name>
      </HeaderLogo>
      <PaintingsLink>
        <StyledLink to="/tableaux">Tableaux</StyledLink>
      </PaintingsLink>
    </NavContainer>
  );
};

export default Header;
