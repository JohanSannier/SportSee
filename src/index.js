import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:userId" element={<App />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
);
