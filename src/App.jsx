import React, { useState } from 'react';
import './App.css';

function App() {
  const [bmi, setBmi] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');

  const bmiApp = () => {
    if (height && weight) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      let bmiMessage = '';
      if (bmiValue < 18.5) {
        bmiMessage = 'Underweight';
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        bmiMessage = 'Normal Weight';
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obese';
      }
      setMessage(bmiMessage);
    } else {
      alert('Please fill the form');
    }
  };

  const reset = () => {
    setBmi(null);
    setHeight('');
    setWeight('');
    setMessage('');
  };

  return (
    <>
      <div className='bg-black w-full h-screen flex justify-center items-center'>
        <div className='h-fit w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[30vw] bg-green-500 grid grid-cols-1 justify-items-center items-center gap-5 p-5 rounded-lg'>
          <h1 className='text-3xl md:text-5xl font-extrabold text-white'>BMI Calculator</h1>
          <div className='h-25 bg-black w-[80%] text-white rounded-lg p-4'>
            <h3 className='text-center text-xl md:text-2xl'>Your BMI: {bmi}</h3>
            <h4 className='mt-2 text-lg text-center'>{message}</h4>
          </div>
          <input
            type="number"
            placeholder='Height in cm'
            className='w-[80%] h-10 border-none text-center rounded-sm'
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder='Weight in kg'
            className='w-[80%] h-10 border-none text-center rounded-sm'
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
          <div className='flex justify-between items-center gap-5'>
            <button
              className='bg-black w-20 h-10 text-white font-semibold rounded-lg text-xl md:text-2xl'
              onClick={bmiApp}
            >
              Check
            </button>
            <button
              className='bg-black w-20 h-10 text-white font-semibold rounded-lg text-xl md:text-2xl'
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
