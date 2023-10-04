import React, { useState } from "react";
import './clock.css';

const Clock = () => {

    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);


    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

    return(
        <div className="clock">
            <h1>{currentTime}</h1>
			<span className="small">Eastern Time (UTC−05:00)</span>
      </div>
    )

}

export default Clock;