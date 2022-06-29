import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CallApi from "../services/API/index";
import "../index.css";
import Error from "./Error";

/**
 *
 * @returns {HTMLElement} the activity page for the developpers
 */
function Activity() {
  const [data, setData] = useState([]);
  const params = useParams();
  let api = new CallApi(params.userId);

  useEffect(() => {
    (async () => {
      let userActivity = await api.getUserActivity();
      setData([userActivity]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data[0] ? (
        <div className="activity-userpage">
          <div className="title-activity">
            Informations sur l'utilisateur {params.userId}
          </div>
          {data[0].map((item, index) => (
            <ul className="list-items-activity">
              <li key={`day-${index}-1`}>Date : {item.day}</li>
              <li key={`kg-${index}-2`}>Poids : {item.kilogram}kg</li>
              <li key={`cal-${index}-3`}>Calories :{item.calories} Kcal</li>
            </ul>
          ))}
          <Link to="/" style={{ color: "black", fontSize: 20 }}>
            Retourner à l'accueil
          </Link>
        </div>
      ) : (
        <Error />
      )}
    </>
  );
}

export default Activity;
