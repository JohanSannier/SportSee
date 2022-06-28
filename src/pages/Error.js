import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <div className="error-page">
      Cette page n'existe pas.
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  );
}

export default Error;
