import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CallApi from "../services/API/index";
import "../index.css";
import Error from "./Error";

/**
 *
 * @returns {HTMLElement} the key-data page for the developpers
 */
function Nutrients() {
  const [data, setData] = useState([]);
  const params = useParams();
  let api = new CallApi(params.userId);

  useEffect(() => {
    (async () => {
      let userNutrients = await api.getUserNutrients();
      setData([userNutrients]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data[0] ? (
        <div className="nutrients-userpage">
          <div className="title-nutrients">
            Informations sur l'utilisateur {params.userId}
          </div>
          {data[0].map((item, index) => (
            <ul className="list-items-nutrients">
              <li key={`day-${index}-1`}>
                {item.type} : {item.amount}
                {item.unit}
              </li>
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

export default Nutrients;
