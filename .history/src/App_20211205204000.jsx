import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);
const [plnPrice, setPlnPrice] = useState(0.2);


const bitcoin = () => {
  let randomNumber = parseFloat((Math.random()*20 - 10).toFixed(3));
  setBitcoinPrice(bitcoinPrice => parseFloat((bitcoinPrice + randomNumber).toFixed(3)));
  setTimeout(bitcoin, 1000);
}

const pln = () => {
  setPlnPrice(1000/bitcoinPrice);
  setTimeout(pln, 1000);
}



useEffect(() => {
  bitcoin();
  plnPrice();
}, []);

  return (
    <p>
      <div className="price">{bitcoinPrice} PLN</div>
      <div className="price">{plnPrice}</div>
    </p>
  );
}

export default App;
