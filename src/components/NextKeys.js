import React from 'react';
import './NextKeys.css';

const NextKeys = ({ nextKeys }) => {
  return (
    <div className='p-nextkeys'>
      <p>Next Keys: {nextKeys}</p>
    </div>
  );
};

export default NextKeys;
