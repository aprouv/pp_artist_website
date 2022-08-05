import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../utils/hooks";
import styled from "styled-components";

const PaintingWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
`;

const PaintingImage = styled.img`
  max-width: 90%;
  max-height: 73vh;
  padding: 8px;
  border: thick double black;
  margin-left: 3vh;
`;

const PaintingInfo = styled.div`
  width: 40%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PaintingName = styled.h1`
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 36px;
`;

const DescriptionText = styled.p`
  font-size: 13px;
  margin: 0px 10px;
  margin-top: 10px;
`;

const DescriptionButton = styled.h4`
  border-radius: 3px;
  font-weight: lighter;
  width: 53%;
  margin: 0 auto;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const PaintingDetails = styled.h5`
  font-size: 17px;
  font-weight: 100;
  margin: 18px auto;
`;

const Arrow = styled.span`
  border: 1px solid grey;
  border-width: 0.08em 0.08em 0 0;
  content: "";
  display: inline-block;
  height: 0.45em;
  left: 0.15em;
  top: 0.15em;
  vertical-align: middle;
  width: 0.45em;
  transform: rotate(135deg);
  margin-left: 4px;
`;

const ContactLink = styled(Link)`
  border: 1px solid lightgrey;
  padding: 7px 11px;
  border-radius: 5px;
  text-decoration: none;
  color: grey;
  margin: 18px auto;
  &:hover {
    background: black;
    color: white;
  }
`;

const Painting = () => {
  const { id: queryId } = useParams();
  const painting = useFetch(`/api/v1/paintings/${queryId}`);
  const element = painting[0];
  const [isActive, setActive] = useState(false);
  const onClick = () => (isActive ? setActive(false) : setActive(true));

  return (
    <PaintingWrapper>
      <div>
        <PaintingImage
          src={require("../../assets/images/" + queryId + ".jpg")}
          alt={element?.name}
        />
      </div>
      <PaintingInfo>
        <PaintingName>{element?.name}</PaintingName>
        <PaintingDetails>{element?.year}</PaintingDetails>
        <PaintingDetails>{element?.format} cm</PaintingDetails>
        <PaintingDetails>{element?.price} €</PaintingDetails>
        {element?.description && (
          <DescriptionButton data-testid="description-button" onClick={onClick}>
            description <Arrow></Arrow>
          </DescriptionButton>
        )}
        {isActive && <DescriptionText>{element?.description}</DescriptionText>}
        <ContactLink to="/contact">Contacter Patricia Prouvost</ContactLink>
      </PaintingInfo>
    </PaintingWrapper>
  );
};

export default Painting;
