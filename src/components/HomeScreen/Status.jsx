import React, {useEffect, useState} from 'react';
import Toggle from './Toggle';

function Status(props) {
const [view, setView] = useState("LIGHT");
const [dt, setDt] = useState(new Date().toTimeString());


useEffect(() => {
  if (props.mode == "On"){
    setView("LIGHT")

  } else {
    setView("DARK")

  }

}, [props.mode]);

useEffect(() => {

    setDt(new Date().toTimeString());

}, [props.mode, props.weather]);





  return (
    <div className="row g-2">
    <div className="col-12">
      <div className="rounded border p-3"><Toggle/></div>
    </div>
    <div className="col-12">
      <div className="rounded border p-3">Last Updated: {dt} </div>
    </div>
    <div className="col-12">
      <div className="rounded border p-3">No alert messages.</div>
    </div>
  </div>

  );
}

export default Status;
