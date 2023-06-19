import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MyHeader from "./Components/Header";
import MyFooter from "./Components/Footer";
import MySidebar from "./Components/Sidebar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Episode1 } from "./Pages/Season1/Episode1";
import { Episode2 } from "./Pages/Season1/Episode2";

let total = 0;

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <MyHeader />
        <span style={{ display: "flex", width: "100%" }}>
          <MySidebar />
          <div className="App-body">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/season1/episode1" element={<Episode1 />}></Route>
              <Route path="/season1/episode2" element={<Episode2 />}></Route>
            </Routes>
          </div>
          {/* <MySidebar /> */}
        </span>
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
