import React, { useEffect, useState } from "react";
// import "./weather.css"


function Weather(props) {
  const [temp, setTemp] = useState('72');
  const [speed, setSpeed] = useState('15');
  const [hum, setHum] = useState('50');
  const [image, setImage] = useState('../../../images/sun.png')

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
      if (props.weather == 'Sunny') {
          setTemp(randomNumber(60, 100));
          setSpeed(randomNumber(0, 15));
          setHum(randomNumber(20, 49));
          setImage('../../../images/sun.png');
      }
      else if (props.weather == 'Rainy'){
        setTemp(randomNumber(50, 69));
        setSpeed(randomNumber(16, 30));
        setHum(randomNumber(50, 85));
        setImage('../../../images/rainy-day.png');

      }  

        else {
          setTemp(randomNumber(-50, 30));
          setSpeed(randomNumber(31, 60));
          setHum(randomNumber(0, 19));
          setImage('../../../images/snowy.png');
      }

  }, [props.weather]);


  return (
    <div className="card m-0 col-4" style={{backgroundColor: props.mode === "On" ? '#F5FBFF' : '#d0d0d0', borderRadius: '35px' }}>
      <div className="card-body p-4">
        <div className="d-flex">
          <h6 className="flex-grow-1">Weather</h6>
        </div>

        <div className="d-flex flex-column text-center mt-3">
          <h2 className="city mb-4">Cincinnati, OH</h2>
          <div>
            <img src={image}
              width="80px" />
          </div>
          <h6 className="display-5 mb-0 font-weight-bold mt-3"> {temp}°F </h6>
          <span className="small">{props.weather}</span>
        </div>


        <div className="d-flex align-items-left mt-3">
          <div className="flex-grow-1">
            <div> <img src="images/wind_one.png" alt="Wind Speed Icon" style={{ width: '20px' }} /> {speed} mph Wind Speed</div>
            <div> <img src="images/humidity_one.png" alt="Humidity Icon" style={{ width: '20px' }} /> {hum}% Humidity</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Weather;