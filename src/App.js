import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Daily from "./components/daily-activity";
import AvgDuration from "./components/average-duration";
import Stats from "./components/stats";
import Score from "./components/score";
import Welcome from "./components/welcome";
import Nutrient from "./components/nutrients-details";
import CallApi from "./services/API";

function App(props) {
  const [data, setData] = useState([]);
  let api = new CallApi(12);

  useEffect(() => {
    (async () => {
      let userName = await api.getUserName();
      let userData = await api.getUser();
      let userPerformance = await api.getUserPerformance();
      let userActivity = await api.getUserActivity();
      let userSessions = await api.getUserSessions();
      let userScore = await api.getUserScore();
      let userNutrients = await api.getUserNutrients();
      setData([
        userName,
        userData,
        userPerformance,
        userActivity,
        userSessions,
        userScore,
        userNutrients,
      ]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Footer />
        <div className="home">
          {data[0] && <Welcome userName={data[0]} />}
          <div className="flex-container">
            <div className="left-content">
              <div className="daily-wrapper">
                {data[3] && <Daily userActivity={data[3]} />}
              </div>
              <div className="bottom-content">
                {data[4] && <AvgDuration userSessions={data[4]} />}
                {data[2] && <Stats userPerformance={data[2]} />}
                {data[5] && <Score userScore={data[5]} />}
              </div>
            </div>
            <div className="nutrient-icons">
              {data[6] && <Nutrient userNutrients={data[6]} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
