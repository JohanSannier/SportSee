import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./index.css";

/**
 *
 * @returns { HTMLElement } the navbar
 */
export default function index() {
  return (
    <nav>
      <ul>
        <img src={logo} alt="Logo de SportSee" />
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <li>Accueil</li>
        </Link>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
}
