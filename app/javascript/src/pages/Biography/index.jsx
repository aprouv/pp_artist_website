import React from "react";
import styled from "styled-components";
import BioPhoto from "../../assets/images/biophoto.jpg";

const BioWrapper = styled.div`
  margin-top: 35px;
  display: flex;
`;

const BioImage = styled.img`
  max-width: 50%;
  height: 73vh;
`;

const BioText = styled.div`
  margin-left: 20px;
`;

const Biography = () => {
  const name = "Patricia Prouvost";
  return (
    <div>
      <BioWrapper>
        <BioImage src={BioPhoto} alt={name} />
        <BioText>
          <p>
            Après 44 ans passés à Reims, Patricia Prouvost est, depuis quelques
            années, installée en bord de mer. Elle profite des lumières et ciels
            changeants des Côtes d’Albâtre pour nourrir son inspiration déjà
            bien habitée par un imaginaire foisonnant et un regard acéré sur le
            monde. Totalement autodidacte, elle peint vraiment par plaisir, avec
            beaucoup de spontanéité et de fraîcheur, au gré de ses envies.
            Initialement portée sur l’écriture, et notamment la poésie, elle
            semble avoir opté finalement pour cette autre façon, plus directe et
            synthétique, plus “sensorielle” peut-être, d’exprimer ses idées et
            émotions avec des couleurs.
          </p>

          <h4>
            “Une journée sans peindre est une journée de perdue”, dit-elle,
            “mais ce qui compense, c’est que l’on peint aussi dans sa tête” !{" "}
          </h4>

          <p>
            Au-delà de cette joie de création pure sur ces espaces de liberté
            que sont les toiles, c’est le partage d’un élan, d’une idée aboutie,
            d’une observation retransmise qui la motivent. Emouvoir, toucher la
            corde sensible de personnes qui, quelque part, par leurs goûts, par
            leur vie, leur parcours, peuvent, à un moment donné rejoindre son
            univers est pour elle une façon bien agréable et gratifiante de
            communiquer sans les mots.
          </p>

          <h4>
            Ses thèmes de prédilection : la nature, les animaux, des thèmes liés
            à l’enfance et à l’existence, la société et les conditions de vie
            des individus.
          </h4>

          <p>
            Des questions métaphysiques évoquées, soulevées, posées et déposées
            sur la toile sous formes diverses et parfois de symboles...avec
            toutes sortes d’outils sous la main, et pas seulement pinceaux et
            couteaux. Au-delà de cette joie de création pure sur ces espaces de
            liberté que sont les toiles, c’est le partage d’un élan, d’une idée
            aboutie, d’une observation retransmise qui la motivent. Emouvoir,
            toucher la corde sensible de personnes qui, quelque part, par leurs
            goûts, par leur vie, leur parcours, peuvent, à un moment donné,
            rejoindre son univers, est pour elle une façon bien agréable et
            gratifiante de communiquer sans les mots, dans un langage universel.
            Au-delà du simple plaisir de créer, d’appréhender toujours et
            encore, sans relâche, jour après jour, un mode d’expression infini,
            il y a bien sûr, vous l’aurez compris, beaucoup de passion, d’esprit
            d’aventure et de vrai bonheur !
          </p>
        </BioText>
      </BioWrapper>
    </div>
  );
};

export default Biography;
