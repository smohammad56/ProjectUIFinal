import React, { useState } from "react";
import './bootstraptabs.css'
import HomeScreen from "./HomeScreen/HomeScreen";

function BootstrapTabs() {
  // State variable to keep track of the active tab
  const [activeTab, setActiveTab] = useState("homeScreen");

  // Function to handle tab click and update the activeTab state
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Content for each tab
  const tabContent = {
    windowOperation: (
      activeTab === "windowOperation" ? <div /> : <div>Content for Window Operation Tab</div>
    ),
    homeScreen: (
      activeTab === "homeScreen" ? <HomeScreen /> : <div />
    ),
    tintControl: (
      activeTab === "tintControl" ? <div /> : <div>Content for Tint Control Tab</div>
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
    </div>
  );
}

export default BootstrapTabs;
