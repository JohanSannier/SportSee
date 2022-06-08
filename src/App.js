import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Example from "./components/daily-activity";

function App(props) {
  return (
    <div className="app">
      <Navbar />
      <Footer />
      {/* <Example /> */}
    </div>
  );
}

export default App;
