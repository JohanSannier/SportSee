import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CallApi from "../services/API/index";
import Error from "./Error";
import "../index.css";

/**
 *
 * @returns {HTMLElement} the sessions page for the developpers
 */
function Sessions() {
  const [data, setData] = useState([]);
  const params = useParams();
  let api = new CallApi(params.userId);

  useEffect(() => {
    (async () => {
      let userSessions = await api.getUserSessions();
      setData([userSessions]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data[0] ? (
        <div className="sessions-userpage">
          <div className="title-sessions">
            Informations sur l'utilisateur {params.userId}
          </div>
          {data[0].map((item, index) => (
            <ul className="list-items-sessions">
              <li key={`min-${index}-1`}>
                Temps de la session : {item.sessionLength} minutes
              </li>
              <li key={`weekday-${index}-2`}>
                Jour de la semaine : {item.weekDays}
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

export default Sessions;
