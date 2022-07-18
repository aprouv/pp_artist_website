import React, { useState } from "react";
import styled from "styled-components";

const CardsWrapper = styled.div`
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  ${(props) => props.$isHovering && `opacity: 0.7;`}
`;
const PaintingName = styled.p`
  color: white;
  margin: 0;
  padding: 5px;
  font-weight: lighter;
`;

const LinearGradient = styled.div`
  position: absolute;
  min-width: 60%;
  max-width: 80%;
  opacity: 0.9;
  z-index: 2;
  transition: 0.5s ease;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(125, 19, 19, 1) 45%,
    rgba(177, 39, 63, 1) 100%
  );
  left: 0px;
  top: 14px;
`;

const Card = ({ name, id }) => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseOver = () => setIsHovering(true);
  const mouseOut = () => setIsHovering(false);

  return (
    <CardsWrapper
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      data-testid="painting-wrapper"
    >
      {isHovering ? (
        <div>
          <LinearGradient>
            <PaintingName>{name}</PaintingName>
          </LinearGradient>
          <CardImage
            src={require("../../assets/images/" + id + ".jpg")}
            alt={`${name}`}
            $isHovering
          />
        </div>
      ) : (
        <CardImage
          src={require("../../assets/images/" + id + ".jpg")}
          alt={`${name}`}
        />
      )}
    </CardsWrapper>
  );
};

export default Card;
