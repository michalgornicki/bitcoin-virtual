import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);
const [accountPLN, setAccountPLN] = useState([10000]);
const [accountBTC, setAccountBTC] = useState([0]);


const bitcoin = () => {
  let randomNumber = parseFloat((Math.random()*20 - 10).toFixed(3));
  setBitcoinPrice((bitcoinPrice) => parseFloat((bitcoinPrice + randomNumber).toFixed(3)));
  console.log(bitcoinPrice);
  setTimeout(bitcoin, 1000);
}

const buyBitcoin = () => {
  setAccountPLN([accountPLN - 1000]);
  setAccountBTC([accountBTC => bitcoinPrice]);
}


useEffect(() => {
  bitcoin();
}, 
[]);

  return (
    <p>
      <div className="price">{bitcoinPrice} PLN</div>
      <div className="account">{accountPLN} PLN</div>
      <div className="button" onClick={buyBitcoin}>{buyBitcoin}</div>
    </p>
  );
}

export default App;
