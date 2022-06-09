import React from "react";
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

function App(props) {
  let calories = 1930;
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Footer />
        <div className="home">
          <Welcome />
          <Daily />
          <AvgDuration />
          <Stats />
          <Score />
          <div className="nutrient-icons">
            <Nutrient
              nutrientIcon={Fire}
              nutrientType="Calories"
              nutrientEnd="kCal"
              nutrientNumber={calories}
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
  );
}

export default App;
