import React from 'react';
import "./weather.css"

function Weather() {
  return (
    <div className="card">
      <div className="weather">
        <div className="weather-info">
          <img src="images/rain.png" className="weather-icon" alt="Weather Icon" />
          <div className="weather-details">
            <h1 className="temp">22 °F</h1>
            <h2 className="city">Cincinnati</h2>
            <div className="details">
              <div className="col">
                <div className="info">
                  <img src="images/humidity.png" alt="Humidity Icon" />
                  <div>
                    <p className="humidity">50%</p>
                    <p>Humidity</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="info">
                  <img src="images/wind.png" alt="Wind Icon" />
                  <div>
                    <p className="wind">15km/h</p>
                    <p>Wind Speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
