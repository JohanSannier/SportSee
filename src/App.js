import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Daily from "./components/daily-activity";
import AvgDuration from "./components/average-duration";
import Stats from "./components/stats";
import Score from "./components/score";
import Welcome from "./components/welcome";
import Nutrient from "./components/nutrients-details";
import Fire from "./assets/calories-icon.png";
import Carbs from "./assets/carbs-icon.png";
import Fat from "./assets/fat-icon.png";
import Protein from "./assets/protein-icon.png";
import CallApi from "./services/API";

function App(props) {
  const [data, setData] = useState([]);
  let api = new CallApi(18);

  useEffect(() => {
    (async () => {
      let userData = await api.getUser();
      let userName = await api.getUserName();
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
          <Welcome userName={data[0]} />
          <div className="flex-container">
            <div className="left-content">
              <div className="daily-wrapper">
                <Daily userActivity={data[3]} />
              </div>
              <div className="bottom-content">
                <AvgDuration userSessions={data[4]} />
                <Stats userPerformance={data[2]} />
                <Score userScore={data[5]} />
              </div>
            </div>
            <div className="nutrient-icons">
              <Nutrient
                nutrientIcon={Fire}
                nutrientType="Calories"
                nutrientEnd="kCal"
                nutrientNumber={"1930"}
              />
              <Nutrient
                nutrientIcon={Protein}
                nutrientType="Protéines"
                nutrientEnd="g"
                nutrientNumber="155"
              />
              <Nutrient
                nutrientIcon={Carbs}
                nutrientType="Glucides"
                nutrientEnd="g"
                nutrientNumber="290"
              />
              <Nutrient
                nutrientIcon={Fat}
                nutrientType="Lipides"
                nutrientEnd="g"
                nutrientNumber="55"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
