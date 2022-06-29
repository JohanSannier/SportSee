import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CallApi from "../services/API/index";
import "../index.css";
import Error from "./Error";

/**
 *
 * @returns {HTMLElement} the activities page for the developpers
 */
function Activities() {
  const [data, setData] = useState([]);
  const params = useParams();
  let api = new CallApi(params.userId);

  useEffect(() => {
    (async () => {
      let userPerformance = await api.getUserPerformance();
      setData([userPerformance]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data[0] ? (
        <div className="activities-userpage">
          <div className="title-activities">
            Informations sur l'utilisateur {params.userId}
          </div>
          {data[0].map((item, index) => (
            <ul className="list-items-activities">
              <li key={`day-${index}-1`}>
                {item.kindOfData} : {item.value}
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

export default Activities;
