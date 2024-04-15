import React, { useState } from 'react';
import './App.css';

function App() {
  const [prediction, setPrediction] = useState('');
  const [inputData, setInputData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: ''
  });

  const handlePredict = async () => {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)
    });
  
    const data = await response.json();
    setPrediction(data.result);
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <h1>Diabetes Predictor</h1>
      <div className="input-field">
        <label>Number of Pregnancies:</label>
        <input type="number" name="Pregnancies" placeholder="Enter the number of pregnancies" value={inputData.Pregnancies} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label>Glucose Level:</label>
        <input type="number" name="Glucose" placeholder="Enter the glucose level" value={inputData.Glucose} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label>Blood Pressure:</label>
        <input type="number" name="BloodPressure" placeholder="Enter the blood pressure" value={inputData.BloodPressure} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label>Skin Thickness:</label>
        <input type="number" name="SkinThickness" placeholder="Enter the skin thickness" value={inputData.SkinThickness} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label>Insulin Level:</label>
        <input type="number" name="Insulin" placeholder="Enter the insulin level" value={inputData.Insulin} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label>BMI:</label>
        <input type="number" name="BMI" placeholder="Enter the BMI" value={inputData.BMI} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label>Diabetes Pedigree Function:</label>
        <input type="number" name="DiabetesPedigreeFunction" placeholder="Enter the diabetes pedigree function" value={inputData.DiabetesPedigreeFunction} onChange={handleInputChange} />
      </div>
      <div className="input-field">
        <label>Age:</label>
        <input type="number" name="Age" placeholder="Enter the age" value={inputData.Age} onChange={handleInputChange} />
      </div>
      <button className="predict-button" onClick={handlePredict}>Predict</button>
      <div className="prediction">{prediction}</div>
    </div>
  );
}

export default App;
