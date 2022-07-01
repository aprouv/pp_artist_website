import React from "react";
import { Link } from "react-router-dom";

const Biography = () => {
  return (
    <div>
      <p>
        J'ai commencé à peindre sur le tard, quand j'étais déjà frippée, mais ça
        ne m'a pas empêchée de réaliser de merveilleux tableaux
      </p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Biography;
