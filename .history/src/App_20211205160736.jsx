import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState();


const setPrice = () => {
  let randomNumber = (Math.random;
  setBitcoinPrice(randomNumber);
  setTimeout(setPrice, 1000)
  console.log(randomNumber)
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
