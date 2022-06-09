import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Daily from "./components/daily-activity";
import Welcome from "./components/welcome";

function App(props) {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Footer />
        <div className="graphs">
          <Welcome />
          <Daily />
        </div>
      </div>
    </div>
  );
}

export default App;
