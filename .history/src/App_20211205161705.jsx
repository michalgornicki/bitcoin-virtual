import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);


const setPrice = () => {
  for (let bitcoinPrice = 0; i < 999; bitcoinPrice + randomNumber) {
    let randomNumber = parseFloat((Math.random()*10).toFixed(3));
    setBitcoinPrice(bitcoinPrice + randomNumber);
  }
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
