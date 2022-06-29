import React from "react";
import { Link } from "react-router-dom";

/**
 *
 * @returns {HTMLElement} the error page
 */
function Error() {
  return (
    <div className="error-page">
      Cette page n'existe pas.
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  );
}

export default Error;
