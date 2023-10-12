import React from 'react';
import './TintButtons.css'
import HalfShadedSquareIcon from './HalfShadedSquareIcon';
import FullShadedSquareIcon from './FullShadedSquare';
import BottomShadedSquareIcon from './BottomShadedSquareIcon';
import RedSlashSquareIcon from './RedSlashSquareIcon';

function TintButtons() {
  return (
    <div className="button-container inline-block">
      <button className="btn btn-primary" type="submit">
        <div className="icon"><FullShadedSquareIcon/></div>
        <div className="text">Full Tint</div>
      </button>
      <button className="btn btn-primary" type="submit">
        <div className="icon"><HalfShadedSquareIcon/></div>
        <div className="text">Upper Tint</div>
      </button>
      <button className="btn btn-primary" type="submit">
        <div className="icon"><BottomShadedSquareIcon/></div>
        <div className="text">Bottom Tint</div>
      </button>
      <button className="btn btn-primary" type="submit">
        <div className="icon"><RedSlashSquareIcon/></div>
        <div className="text">No Tint</div>
      </button>
    </div>
  );
}

export default TintButtons;
