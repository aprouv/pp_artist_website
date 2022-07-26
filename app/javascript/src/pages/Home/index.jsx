import React, { useState } from "react";
import HomePainting from "../../assets/images/home_painting.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TypewriterEffect from "react-typewriter-effect";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  background-image: url(${HomePainting});
  background-size: cover;
  height: 100vh;
  flex: 75%;
`;

const NavlistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 109px 30px;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  width: 90px;
  padding: 9px 15px;
  background: black;
  margin: 10px 0px;
  font-size: 19px;
  text-align: center;
  opacity: 0.9;
  border-radius: 5px;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease;
  }
`;

const HomeName = styled.h2`
  text-align: right;
  color: white;
  text-shadow: 3px 3px 13px black;
  font-weight: 400;
  font-size: 68px;
  letter-spacing: 11px;
  margin: 10px 30px;
`;

const HomeQuoteWrapper = styled.div`
  background: black;
  flex: 25%;
  max-height: 100vh;
  display: flex;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <HomeQuoteWrapper>
        <TypewriterEffect
          textStyle={{
            margin: "10px 20px",
            fontSize: "22px",
            lineHeight: "34px",
            letterSpacing: "1.5px",
            textAlign: "right",
            fontWeight: 100,
            color: "white",
            maxHeigth: "100vh",
          }}
          startDelay={100}
          cursorColor="white"
          text="Quand l'art reste libre et garde une certaine spontanéité d'expression, au-delà du travail et de l'expérience acquise, se moquant des modes, du marché et ses spéculations, alors il est authentique !"
          typeSpeed={50}
        />
      </HomeQuoteWrapper>
      <ImageContainer>
        <HomeName>
          Patricia
          <br />
          Prouvost
        </HomeName>
        <NavlistWrapper>
          <HomeLink to="biographie">Biographie</HomeLink>
          <HomeLink to="tableaux">Tableaux</HomeLink>
          <HomeLink to="contact">Contact</HomeLink>
        </NavlistWrapper>
      </ImageContainer>
    </Container>
  );
};

export default Home;
