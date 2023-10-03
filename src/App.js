import React, { useState } from 'react';
import './App.css';

function App() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleToggle1 = () => {
    setIsChecked1(!isChecked1);
    if (!isChecked1) {
      setIsChecked2(false);
      setIsChecked3(false);
    }
  };

  const handleToggle2 = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false);
  };

  const handleToggle3 = () => {
    setIsChecked3(!isChecked3);
    setIsChecked1(false);
  };

  return (
    <div className="switch-align">
      <div className="switch-container">
        <div className="switch-container-inner">
          <label className="switch">
            <input
              type="checkbox"
              checked={isChecked1}
              onChange={handleToggle1}
            />
            <span className={`slider round ${isChecked1 ? 'slider--blue' : ''}`}></span>
          </label>
          <span className="text">Бути студентом НАУ</span>
        </div>

        <div className="switch-container-inner">
          <label className="switch">
            <input
              type="checkbox"
              checked={isChecked2}
              onChange={handleToggle2}
            />
            <span className={`slider round ${isChecked2 ? 'slider--green' : ''}`}></span>
          </label>
          <span className="text">Бути психічно здоровим</span>
        </div>

        <div className="switch-container-inner">
          <label className="switch">
            <input
              type="checkbox"
              checked={isChecked3}
              onChange={handleToggle3}
            />
            <span className={`slider round ${isChecked3 ? 'slider--pink' : ''}`}></span>
          </label>
          <span className="text">Бути щасливим</span>
        </div>
      </div>
    </div>
  );
}

export default App;
