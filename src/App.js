import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(32);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    if (newTemperature > 32) {
      setTemperatureColor('hot');
    }
  };

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if (newTemperature <= 32) {
      setTemperatureColor('cold');
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}ºF
        </div>
      </div>
      <div className="button-container">
        <button onClick={decreaseTemperature}>-</button>
        <button onClick={increaseTemperature}>+</button>
      </div>
    </div>
  );
};

export default App;
