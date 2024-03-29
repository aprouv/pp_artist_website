import React from "react";
import styled from "styled-components";
import BioPhoto from "../../assets/images/biophoto.jpg";

const BioWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  text-align: justify;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex: 1 1 100vw;
  }
`;

const BioImage = styled.img`
  object-fit: contain;
  border: double thick;
  padding: 7px;
  max-height: 70vh;
  @media only screen and (max-width: 768px) {
    max-height: 60vh;
  }
`;

const BioText = styled.div`
  margin-right: 20px;
  max-width: 127vh;
  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const BioQuote = styled.p`
  margin: 0 30px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

const BioTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 17.5px;
  text-align: center;
  font-size: 37px;
  margin-bottom: 10px;
`;

const BioSubtitle = styled.h2`
  letter-spacing: 5.5px;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const Biography = () => {
  const name = "Patricia Prouvost";
  return (
    <div>
      <BioTitle>Patricia Prouvost</BioTitle>
      <BioSubtitle>Artiste peintre</BioSubtitle>
      <BioWrapper>
        <BioText>
          <p style={{ marginTop: 0 }}>
            Après 44 ans passés à Reims, je suis, depuis quelques années,
            installée en bord de mer. Je profite des lumières et ciels
            changeants de la Côte d’Albâtre pour nourrir mon inspiration déjà
            bien habitée par un imaginaire foisonnant et un regard acéré sur le
            monde. Totalement autodidacte, je peins vraiment par plaisir au gré
            de mes envies. Initialement portée sur l’écriture, et notamment la
            poésie, j'ai finalement opté pour cette autre façon, plus directe et
            synthétique, plus “sensorielle” peut-être, d’exprimer mes idées et
            émotions avec des couleurs.
          </p>

          <BioQuote>
            "Une journée sans peindre est une journée de perdue. Mais ce qui
            compense, c’est que l’on peint aussi dans sa tête!"{" "}
          </BioQuote>

          <p>
            Au-delà de cette joie de création pure sur ces espaces de liberté
            que sont les toiles, c’est le partage d’un élan, d’une idée aboutie,
            d’une observation retransmise qui me motivent. Emouvoir, toucher la
            corde sensible de personnes qui, quelque part, par leurs goûts, par
            leur vie, leur parcours, peuvent, à un moment donné rejoindre mon
            univers est pour moi une façon bien agréable et gratifiante de
            communiquer sans les mots, dans un langage universel.
          </p>

          <BioQuote>
            Mes thèmes de prédilection : la nature, les animaux, des thèmes liés
            à l’enfance et à l’existence, la société et les conditions de vie
            des individus.
          </BioQuote>

          <p>
            Des questions métaphysiques évoquées, soulevées, posées et déposées
            sur la toile sous formes diverses et parfois de symboles...avec
            toutes sortes d’outils sous la main, et pas seulement pinceaux et
            couteaux. Au-delà du simple plaisir de créer, d’appréhender toujours
            et encore, sans relâche, jour après jour, un mode d’expression
            infini, il y a bien sûr, vous l’aurez compris, beaucoup de passion,
            d’esprit d’aventure et de vrai bonheur !
          </p>
        </BioText>
        <BioImage src={BioPhoto} alt={name} />
      </BioWrapper>
    </div>
  );
};

export default Biography;
