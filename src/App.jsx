import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    } else {
      setMessage("Please enter valid weight and height");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-500 text-white p-2 rounded mt-4"
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-4 text-center">
            <p className="text-lg">Your BMI: {bmi}</p>
            <p className="text-lg">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
