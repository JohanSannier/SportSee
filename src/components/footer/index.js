import React from "react";
import "./index.css";
import zen from "../../assets/zen.png";
import swim from "../../assets/swim.png";
import bike from "../../assets/bike.png";
import weight from "../../assets/weight.png";

function index(props) {
  return (
    <footer>
      <div className="footer-icons">
        <img src={zen} alt="Icone de méditation" />
        <img src={swim} alt="Icone de natation" />
        <img src={bike} alt="Icone de vélo" />
        <img src={weight} alt="Icone de poids" />
      </div>
      <span>Copiryght, SportSee 2020</span>
    </footer>
  );
}

export default index;
