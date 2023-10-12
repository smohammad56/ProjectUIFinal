import React, { useState } from 'react';
import './Toggle.css'; // Create a CSS file for styling

function Toggle(props) {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container">
      <div className="label">Light Mode: {props.mode}</div>
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className="slider"></div>
        <span className="label">{isOn ? 'On' : 'Off'}</span>
      </div>
    </div>
  );
}

export default Toggle;
