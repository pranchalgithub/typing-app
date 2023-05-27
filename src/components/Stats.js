import React from 'react';
import './Stats.css';

const Stats = ({ keyCount, accuracy }) => {
  return (
    <div className='p-stats'>
      <p>Number of Keys Pressed: {keyCount}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
};

export default Stats;
