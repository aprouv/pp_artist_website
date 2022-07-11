import React, { useState } from "react";
import HomePainting from "../../assets/images/home_painting.jpg"
import styled from "styled-components";
import Pp from "../../assets/images/patricia_prouvost.png"
import { Link } from "react-router-dom";

const Banner = styled.div`
background-image: url(${HomePainting});
&:hover {
  opacity: 0.9;
}
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 130vh;
position: relative;
`

const Logo = styled.img`
width: 30%;
`
const NavlistWrapper = styled.div`
display: flex;
justify-content: space-evenly;
width: 80%;
margin: 105px auto;
position: absolute;
top: 185px;
width: 100%;
`

const HomeLogo = styled.div`
display: flex;
justify-content: center;
`

const HomeLink = styled(Link)`
text-decoration: none;
color: white;
padding: 9px 15px;
background: darkred;
font-size: 19px;
    opacity: 0.9;
    &:hover {
      transform:scale(1.10);
      transition: 0.5s ease;
    }
`

const HomeName = styled.h2`
text-align: center;
    font-weight: 400;
    font-size: 68px;
    letter-spacing: 23px;
    background-color : rgba(255,255,255,0.5);
    margin: 0;
    position: absolute;
    width: 100%;
    top: 91px;
    `

const HomeQuote = styled.p`

    margin: 15px 80px;
    font-size: 23px;
    line-height: 45px;
    letter-spacing: 1.5px;
    text-align: center;
    font-weight: 300;
`

const HomeQuoteWrapper = styled.div`
background: rgba(255,255,255,0.5);
width: 100px;
position: absolute;
    bottom: 196px;
    width: 100%;
`

const Home = () => {

  return (
      <Banner>

          <HomeName>Patricia Prouvost</HomeName>

        <NavlistWrapper>
        <HomeLink to="biographie">BIOGRAPHIE</HomeLink>
        <HomeLink to="tableaux">TABLEAUX</HomeLink>
        <HomeLink to="contact">CONTACT</HomeLink>
        </NavlistWrapper>
        <HomeQuoteWrapper><HomeQuote>"Quand l'art reste libre et garde une certaine spontanéité d'expression, au-delà du travail et de l'expérience acquise, se moquant des modes, du marché et ses spéculations, alors il est authentique !"</HomeQuote></HomeQuoteWrapper>
      </Banner>
  );
};

export default Home;
