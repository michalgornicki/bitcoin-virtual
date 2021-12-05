import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);


const setPrice = () => {
  for (let i = 0; ; i++) {
    text += cars[i] + "<br>";
  }
  let randomNumber = parseFloat((Math.random()*10).toFixed(3));
  setBitcoinPrice(bitcoinPrice + randomNumber);
  setTimeout(setPrice, 1000)
}

useEffect(() => {
  setPrice();
}, []);

  return (
    <p>
      <div>{bitcoinPrice}</div>
    </p>
  );
}

export default App;
