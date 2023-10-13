import React, { useState, useEffect } from 'react';

function RangeSlider(props) {
  const [sliderValue, setSliderValue] = useState(0); // Initial slider value

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    if (props.seasonVal == 'Fall') {
        setSliderValue(props.falltintLvl)
    } else if (props.seasonVal == 'Winter')
    {
      setSliderValue(props.wintertintLvl)
    }
    else if (props.seasonVal == 'Spring')
    {
      setSliderValue(props.springtintLvl)
    }
    else if (props.seasonVal == 'Summer') {
      setSliderValue(props.summertintLvl)
    }
}, [props]);

  return (
    <div>
      <input className="tintSlider w-75"
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
