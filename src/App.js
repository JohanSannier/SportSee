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
  let api = new CallApi(12);

  useEffect(() => {
    (async () => {
      let userData = await api.getUser();
      let userPerformance = await api.getUserPerformance();
      let userActivity = await api.getUserActivity();
      let userSessions = await api.getUserSessions();
      setData([userData, userPerformance, userActivity, userSessions]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("====================================");
  console.log(data[0]);
  console.log("====================================");

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Footer />
        <div className="home">
          <Welcome />
          <div className="flex-container">
            <div className="left-content">
              <div className="daily-wrapper">
                <Daily />
              </div>
              <div className="bottom-content">
                <AvgDuration />
                <Stats />
                <Score />
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
