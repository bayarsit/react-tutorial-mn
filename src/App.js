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
import { Episode3 } from "./Pages/Season1/Episode3";
import { Episode4 } from "./Pages/Season1/Episode4";
import { Episode5 } from "./Pages/Season1/Episode5";
import { Exam } from "./Pages/Season1/Exam";
import { S2Episode1 } from "./Pages/Season2/S2Episode1";

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
              {/* Episode 1 */}
              <Route path="/" element={<Home />}></Route>
              <Route path="/season1/episode1" element={<Episode1 />}></Route>
              <Route path="/season1/episode2" element={<Episode2 />}></Route>
              <Route path="/season1/episode3" element={<Episode3 />}></Route>
              <Route path="/season1/episode4" element={<Episode4 />}></Route>
              <Route path="/season1/episode5" element={<Episode5 />}></Route>
              <Route path="/season1/exam" element={<Exam />}></Route>
              {/* Episode 2 */}
              <Route path="/season2/episode1" element={<S2Episode1 />}></Route>
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
