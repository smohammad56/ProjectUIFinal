import React from 'react';
import './SeasonSets.css'; // Make sure the path is correct


function SeasonSets() {
  return (
    <div className="d-flex flex-column align-items-center">
      <button className="btn btn-custom mb-4 w-75">Fall</button>
      <button className="btn btn-custom mb-4 w-75">Winter</button>
      <button className="btn btn-custom mb-4 w-75">Spring</button>
      <button className="btn btn-custom w-75">Summer</button>
    </div>
  );
}

export default SeasonSets;
