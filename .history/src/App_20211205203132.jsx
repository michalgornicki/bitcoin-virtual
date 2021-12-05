import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);


const setPrice = () => {
  let randomNumber = parseFloat((Math.random()*20 - 10).toFixed(3));
  setBitcoinPrice(bitcoinPrice => parseFloat((bitcoinPrice + randomNumber).toFixed(3)));
  setTimeout(setPrice, 1000)
  let pln = 1/
}

useEffect(() => {
  setPrice();
}, []);

  return (
    <p>
      <div className="price">{bitcoinPrice} PLN</div>
    </p>
  );
}

export default App;
