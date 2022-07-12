import React from "react";
import styled from "styled-components";

const BioWrapper = styled.div`
  margin-top: 35px;
`;

const Biography = () => {
  return (
    <div>
      <BioWrapper>
        <p>
          Patricia PROUVOST est, depuis presque trois ans, installée en bord de
          mer, près de la baie de Somme. Elle profite des lumières et des
          paysages changeants pour nourrirson inspiration déjà bien habitée par
          un imaginaire foisonnant. Totalement autodidacte, elle peint vraiment
          par plaisir, avec beaucoup de spontanéité et de fraîcheur, au gré de
          ses envies. Initialement portée sur l’écriture, et notamment la
          poésie, elle semble avoir opté finalement pour cette autre façon, plus
          directe ou rapide, plus palpable peut-être, d’exprimer ses idées et
          ses émotions avec des couleurs. En fait, ce qu’elle apprécie surtout,
          c’est le résultat concret qui donne un côté ludique et quelque peu
          magique aussi à l’expression quasi immédiate, n’hésitant pas à
          expérimenter des outils moins classiques que pinceaux et couteaux pour
          y parvenir.
        </p>

        <h4>« Une journée sans peindre est une journée de perdue »</h4>

        <p>
          Au-delà de cette joie de création pure sur ces espaces de liberté que
          sont les toiles, c’est le partage d’un élan, d’une idée aboutie, d’une
          observation retransmise qui la motivent. Emouvoir, toucher la corde
          sensible de personnes qui, quelque part, par leurs goûts, par leur
          vie, leur parcours, peuvent, à un moment donné rejoindre son univers
          est pour elle une façon bien agréable et gratifiante de communiquer
          sans les mots.
        </p>

        <h4>
          Ses thèmes de prédilection : la nature sous toutes ses formes et des
          thèmes liés à l’enfance et à l’existence
        </h4>

        <p>
          Et, c’est clair, Patricia PROUVOST a toujours une oeuvre en tête qui
          attend que la précédente soit terminée. Ses thèmes de prédilection :
          la nature, et des thèmes liés à l’enfance et à l’existence, autant de
          questions métaphysiques évoquées, soulevées, posées et déposées sur la
          toile sous formes diverses et parfois de symboles... Au-delà du simple
          plaisir de créer et d’appréhender toujours et encore, sans relâche,
          jour après jour un mode d’expression infini, il y a bien sûr, vous
          l’aurez compris, beaucoup de passion, d’esprit d’aventure et de vrai
          bonheur !
        </p>
      </BioWrapper>
    </div>
  );
};

export default Biography;
