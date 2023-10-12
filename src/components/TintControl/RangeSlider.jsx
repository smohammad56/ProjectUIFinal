import React, { useState } from 'react';

function RangeSlider() {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>{sliderValue}%</p>
    </div>
  );
}

export default RangeSlider;
