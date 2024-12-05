import React, { useState } from 'react';

export default function Task() {
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState(''); 

  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const minusClick = () => {
    if (number > -10) {
      setNumber(number - 1);
      setColor(randomColor());
    }
  };

  const plusClick = () => {
    if (number < 10) {
      setNumber(number + 1);
      setColor(randomColor());
    }
  };

  return (
    <div>
      <div className='container'>
        <button id='minusButton' onClick={minusClick}>-</button>
        <div className='num'>{number}</div>
        <button id='plusButton' onClick={plusClick}>+</button>
      </div>
      <div
        id='colors'
        style={{
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}
