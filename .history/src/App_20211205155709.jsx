import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);


const setPrice = () => {
  var random = Math.random;
  setBitcoinPrice(bitcoinPrice + 50)
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
