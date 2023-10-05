import React from 'react';

function TintButtons() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <button className="btn btn-primary btn-block p-3">Button 1</button>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary btn-block p-3">Button 2</button>
        </div>
        <div className="col-3">
          <button className="btn btn-success btn-block p-3">Button 3</button>
        </div>
        <div className="col-3">
          <button className="btn btn-danger btn-block p-3">Button 4</button>
        </div>
      </div>
    </div>
  );
}

export default TintButtons;
