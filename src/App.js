import React, { useState, useEffect } from 'react';
import TypingBox from './components/TypingBox';
import NextKeys from './components/NextKeys';
import Stats from './components/Stats';
import './App.css';

const App = () => {
  const [nextKeys, setNextKeys] = useState('');
  const [keyCount, setKeyCount] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  const handleKeyPress = (inputValue) => {

    // Incrementing the keyCount by the number of keys pressed
    setKeyCount((prevKeyCount) => prevKeyCount + inputValue.length);

    // Calculating the accuracy percentage
    const newAccuracy = calculateAccuracy(inputValue);
    setAccuracy(newAccuracy);
  };

  const calculateAccuracy = (inputValue) => {

    //We have considered only 'asdfjkl;' keys for our app
    const expectedKeys = 'asdfjkl;';
    let incorrectKeyCount = 0;

    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] !== expectedKeys[i]) {
        incorrectKeyCount++;
      }
    }

    const accuracyPercentage = ((inputValue.length - incorrectKeyCount) / inputValue.length) * 100;
    return accuracyPercentage.toFixed(2); 
  };

  useEffect(() => {
    // Initializing the nextKeys when the component mounts
    setNextKeys('asdfjkl;');

    const timer = setTimeout(() => {
      // Resetting the keyCount after the 5-minute window
      setKeyCount(0);
    }, 5 * 60 * 1000); 

    return () => clearTimeout(timer); // Clearing the timer when the component unmounts
  }, []);


  return (
    <div className='app-content'>
      <h1>START YOUR TYPE TEST</h1>
      <TypingBox handleKeyPress={handleKeyPress} />
      <NextKeys nextKeys={nextKeys} />
      <Stats keyCount={keyCount} accuracy={accuracy} />
    </div>
  );
};

export default App;