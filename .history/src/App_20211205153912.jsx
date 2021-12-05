import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(1);

useEffect(() =>{
  setPrice()
})

const setPrice = () => {
  var random = Math.random;
  setBitcoinPrice()
}

  return (
    <p>
      <div>{bitcoinPrice}</div>
    </p>
  );
}

export default App;
