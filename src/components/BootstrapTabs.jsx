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


  const [seasonVal, setseasonVal] = useState('');
  const [fall, setFall] = useState({tintOperation: '', temp: 0, tintLvl: 0});
  const [winter, setWinter] = useState({tintOperation: '', temp: 0, tintLvl: 0});
  const [spring, setSpring] = useState({tintOperation: '', temp: 0 , tintLvl: 0});
  const [summer, setSummer] = useState({tintOperation: '', temp: 0, tintLvl: 0});


  // Function to handle tab click and update the activeTab state
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };



  // Content for each tab
  const tabContent = {
    windowOperation: (
      activeTab === "windowOperation" ? <WOScreen seasonVal={seasonVal} setseasonVal={setseasonVal} fall={fall} winter={winter} spring={spring} summer={summer} setFall={setFall} setWinter={setWinter} setSpring={setSpring} setSummer={setSummer}/> : <div />
    ),
    homeScreen: (
      activeTab === "homeScreen" ? <HomeScreen mode={mode} setMode={setMode} weather={weather} content={content}/> : <div/>
    ),
    tintControl: (
      activeTab === "tintControl" ? <TintScreen seasonVal={seasonVal} setseasonVal={setseasonVal} fall={fall} winter={winter} spring={spring} summer={summer} setFall={setFall} setWinter={setWinter}/> : <div />
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
