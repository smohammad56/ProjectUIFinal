import React from 'react';

function SeasonSets(props) {

  
  // load function, sets the values and updates whatever necessary
  return (
    <div className="d-flex flex-column mt-4 align-items-center">
      <button className="btn btn-info mb-4 w-50" onClick={() => props.setseasonVal("Fall")}>Fall</button>
      <button className="btn btn-info mb-4 w-50" onClick={() => props.setseasonVal("Winter")}>Winter</button>
      <button className="btn btn-info mb-4 w-50" onClick={() => props.setseasonVal("Spring")}>Spring</button>
      <button className="btn btn-info w-50" onClick={() => props.setseasonVal("Summer")}>Summer</button>
    </div>
  );
}

export default SeasonSets;
