import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Example from "./components/daily-activity";

function App(props) {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Footer />
        <div className="daily-act">
          <Example />
        </div>
      </div>
    </div>
  );
}

export default App;
