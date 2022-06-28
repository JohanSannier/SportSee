import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CallApi from "../services/API/index";
import Error from "./Error";
import "../index.css";

function Score(props) {
  const [data, setData] = useState([]);
  const params = useParams();
  let api = new CallApi(params.userId);

  useEffect(() => {
    (async () => {
      let userScore = await api.getUserScore();
      setData([userScore]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data[0] ? (
        <div className="score-userpage">
          <div className="title-score">
            Informations sur l'utilisateur {params.userId}
          </div>

          <ul className="list-items-score">
            <li key={`completion`}>
              Complétion de l'objectif : {data[0].value} %
            </li>
          </ul>

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

export default Score;
