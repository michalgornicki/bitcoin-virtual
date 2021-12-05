import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState();


const setPrice = () => {
  let randomNumber = (Math.random)*10;
  setBitcoinPrice(randomNumber);
  setTimeout(setPrice, 1000)
  console.log(random)
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
