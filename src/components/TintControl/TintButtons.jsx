import React, { useState, useEffect } from 'react';
import './TintButtons.css';
import HalfShadedSquareIcon from './HalfShadedSquareIcon';
import FullShadedSquareIcon from './FullShadedSquare';
import BottomShadedSquareIcon from './BottomShadedSquareIcon';
import RedSlashSquareIcon from './RedSlashSquareIcon';

function TintButtons(props) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    if (activeButton === buttonId) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonId);
    }
  };

  useEffect(() => {
    if (props.seasonVal == 'Fall') {
      
      setActiveButton(props.falltintOperation)
      
    } else if (props.seasonVal == 'Winter')
    {
      setActiveButton(props.wintertintOperation)
    }
    else if (props.seasonVal == 'Spring')
    {
      setActiveButton(props.springtintOperation)
    }
    else if (props.seasonVal == 'Summer') {
      setActiveButton(props.summertintOperation)
    }
}, [props]);


console.log(activeButton)

  return (
    <div className="button-container">
      <button
        className={`btn btn-primary ${activeButton === 'fullTint' ? 'active' : ''}`}
        type="submit"
        onClick={() => handleButtonClick('fullTint')}
      >
        <div className="icon">
          <FullShadedSquareIcon />
        </div>
        <div className="text">Full Tint</div>
      </button>
      <button
        className={`btn btn-primary ${activeButton === 'upperTint' ? 'active' : ''}`}
        type="submit"
        onClick={() => handleButtonClick('upperTint')}
      >
        <div className="icon">
          <HalfShadedSquareIcon />
        </div>
        <div className="text">Upper Tint</div>
      </button>
      <button
        className={`btn btn-primary ${activeButton === 'bottomTint' ? 'active' : ''}`}
        type="submit"
        onClick={() => handleButtonClick('bottomTint')}
      >
        <div className="icon">
          <BottomShadedSquareIcon />
        </div>
        <div className="text">Bottom Tint</div>
      </button>
      <button
        className={`btn btn-primary ${activeButton === 'noTint' ? 'active' : ''}`}
        type="submit"
        onClick={() => handleButtonClick('noTint')}
      >
        <div className="icon">
          <RedSlashSquareIcon />
        </div>
        <div className="text">No Tint</div>
      </button>
    </div>
  );
}

export default TintButtons;
