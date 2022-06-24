import React from "react";
import { string } from "prop-types";
import "./index.css";

export default function Welcome(props) {
  return (
    <section className="welcome-section">
      <h1>
        Bonjour <span>{props.userName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

Welcome.propTypes = {
  userName: string,
};
