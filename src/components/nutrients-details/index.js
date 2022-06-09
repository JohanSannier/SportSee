import React from "react";
import "./index.css";

function index(props) {
  return (
    <div className={`${props.nutrientType}-count`}>
      <div className="nutrient-icon">
        <img src={props.nutrientIcon} alt="Icone du nutriment" />
      </div>
      <div>
        <p>{props.nutrientNumber + props.nutrientEnd}</p>
        <p>{props.nutrientType}</p>
      </div>
    </div>
  );
}

export default index;
