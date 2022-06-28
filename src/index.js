import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Activity from "./pages/Activity";
import Sessions from "./pages/Sessions";
import Score from "./pages/Score";
import Activities from "./pages/Activities";
import KeyData from "./pages/KeyData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:userId" element={<App />}></Route>
      <Route path="/user/:userId/activity" element={<Activity />}></Route>
      <Route path="/user/:userId/sessions" element={<Sessions />}></Route>
      <Route path="/user/:userId/today-score" element={<Score />}></Route>
      <Route path="/user/:userId/activities" element={<Activities />}></Route>
      <Route path="/user/:userId/key-data" element={<KeyData />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);
