import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);


const setPrice = () => {
  let randomNumber = parseFloat((Math.random()*10).toFixed(3));
  setBitcoinPrice(bitcoinPrice + randomNumber);
  setBitcoinPrice(bitcoinPrice);
  setTimeout(setPrice, 1000)
}

useEffect(() => {
  setPrice();
}, []);

  return (
    <p>
      <div className="price">{bitcoinPrice}</div>
    </p>
  );
}

export default App;
