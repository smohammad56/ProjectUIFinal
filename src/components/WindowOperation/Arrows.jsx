import React, { useState } from 'react';

function NumberDisplay() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    if (number < 100) {
      setNumber(number + 50);
    }
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 50);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    padding: '30px 30px', // Increased padding for bigger buttons
    fontSize: '50px', // Increased font size
    color: 'black',
    border: 'none',
    borderRadius: '10px',
    radius: '20px',
    cursor: 'pointer',
    marginBottom: '10px', // Space between buttons
    marginTop: '30px', // Padding added to the top
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleIncrement}>↑</button>
      <span> {number} %</span>
      <button style={buttonStyle} onClick={handleDecrement}>↓</button>
    </div>
  );
}

export default NumberDisplay;
