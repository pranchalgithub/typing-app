import React, { useState } from 'react';
import './TypingBox.css';

const TypingBox = ({ handleKeyPress }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleKeyPress(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='type -> asdfjkl;'
      />
    </div>
  );
};

export default TypingBox;
