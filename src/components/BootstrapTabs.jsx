import React, { useState } from "react";
import './bootstraptabs.css'
import HomeScreen from "./HomeScreen/HomeScreen";
import Settings from "./Settings";
import TintScreen from "./TintControl/TintScreen";
import WOScreen from "./WindowOperation/WOScreen";


function BootstrapTabs() {
  // State variable to keep track of the active tab
  const [activeTab, setActiveTab] = useState("homeScreen");
  const [mode, setMode] = useState("On");
  const [weather, setWeather] = useState("Sunny");
  const [content, setContent] = useState('Welcome, Salma!');



  // Function to handle tab click and update the activeTab state
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };



  // Content for each tab
  const tabContent = {
    windowOperation: (
      activeTab === "windowOperation" ? <WOScreen/> : <div />
    ),
    homeScreen: (
      activeTab === "homeScreen" ? <HomeScreen mode={mode} weather={weather} content={content}/> : <div/>
    ),
    tintControl: (
      activeTab === "tintControl" ? <TintScreen/> : <div />
    ),
  };

  return (
    <div className="tabs-container">
      <ul className="card-heading nav nav-pills nav-fill mb-5">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "windowOperation" ? "active" : ""}`}
            onClick={() => handleTabClick("windowOperation")}
            href="#"
          >
            Window Operation
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "homeScreen" ? "active" : ""}`}
            onClick={() => handleTabClick("homeScreen")}
            href="#"
          >
            Home Screen
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "tintControl" ? "active" : ""}`}
            onClick={() => handleTabClick("tintControl")}
            href="#"
          >
            Tint Control
          </a>
        </li>
      </ul>
      {/* Render the content based on the active tab */}
      {tabContent[activeTab]}

      <Settings mode={mode} setMode={setMode} weather={weather} setWeather={setWeather} content={content} setContent={setContent}/>

    </div>
  );
}

export default BootstrapTabs;
