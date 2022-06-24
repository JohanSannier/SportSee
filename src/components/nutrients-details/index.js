import React from "react";
import { array } from "prop-types";
import "./index.css";
import Fire from "../../assets/calories-icon.png";
import Carbs from "../../assets/carbs-icon.png";
import Fat from "../../assets/fat-icon.png";
import Protein from "../../assets/protein-icon.png";

export default function UserNutrients(props) {
  const iconsPath = [Fire, Carbs, Fat, Protein];
  return (
    <>
      {props.userNutrients.map((data, index) => (
        <div
          className={`${props.userNutrients[index].type}-count`}
          key={`${props.userNutrients[index].type}-${index}`}
        >
          <div className="nutrient-icon">
            <img
              src={iconsPath[index]}
              alt={`Icone ${props.userNutrients[index].type}`}
            />
          </div>
          <div>
            <p>
              {props.userNutrients[index].amount +
                props.userNutrients[index].unit}
            </p>
            <p>{props.userNutrients[index].type}</p>
          </div>
        </div>
      ))}
    </>
  );
}

UserNutrients.propTypes = {
  userNutrients: array,
};
