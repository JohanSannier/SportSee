import React from "react";
import logo from "../../assets/logo.png";
import "./index.css";

export default function index(props) {
  return (
    <nav>
      <ul>
        <img src={logo} alt="Logo de SportSee" />
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
}
