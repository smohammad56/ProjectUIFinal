import React, { useState, useEffect } from 'react';
import './Toggle.css'; // Create a CSS file for styling

function Toggle(props) {
  const [toggle, setToggle] = useState(true);

  const toggleMode = () => {
        setToggle(!toggle);
    };

  useEffect(() => {
    if (toggle) {
        props.setMode("On");
    } else {
        props.setMode("Off");
    }
}, [toggle]);

  return (
    <div className="toggle-container">
      <div className="label">Light Mode: {props.mode}</div>
      <div className={`toggle-switch ${toggle ? 'on' : 'off'}`} onClick={toggleMode}>
        <div className="slider"></div>
        <span className="label"></span>
      </div>
    </div>
  );
}

export default Toggle;
