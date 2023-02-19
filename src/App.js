import React, { useState, useEffect } from 'react';
import './App.css';


function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [displayClock, setDisplayClock] = useState(false);

  useEffect(() => {
    let intervalID;

    if (displayClock) {
      intervalID = setInterval(() => setTime(new Date()), 1000);
    }

    return () => clearInterval(intervalID);
  }, [displayClock]);

  const handleBackgroundColorChange = () => {
    const colors = ['yellow', 'orange', 'red', 'purple', 'blue', 'green'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = newColor;
  }

  return (
    <div className="digital-clock-container">
      <button className="button" onClick={() => setDisplayClock(!displayClock)}>Toggle Clock</button>
      <button className="button" onClick={handleBackgroundColorChange}>Change Background Color</button>
      {displayClock && (
        <div className="clock-container">
          <h2>{time.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'})}</h2>
        </div>
      )}
    </div>
  );
}

export default DigitalClock;