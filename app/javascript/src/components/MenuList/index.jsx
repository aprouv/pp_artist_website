import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MenuLink = styled(Link)`
  padding: 2vh 2vh;
  text-decoration: none;
  border-bottom: solid 1px lightgrey;
  width: 100%;
  text-align: right;
  background: black;
  width: 94%;
  color: white;
  &:hover {
    font-weight: bold;
  }
`;

const MenuList = ({ onClick }) => {
  return (
    <LinkList onClick={onClick}>
      <MenuLink to="/biographie">Biographie</MenuLink>
      <MenuLink to="/tableaux">Tableaux</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
      <MenuLink to="/livredor">Livre d'or</MenuLink>
    </LinkList>
  );
};

export default MenuList;
