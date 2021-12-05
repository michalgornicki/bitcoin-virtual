import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);
const [account, setAccount] = useState([10000, 0]);


const bitcoin = () => {
  let randomNumber = parseFloat((Math.random()*20 - 10).toFixed(3));
  setBitcoinPrice((bitcoinPrice) => parseFloat((bitcoinPrice + randomNumber).toFixed(3)));
  console.log(bitcoinPrice);
  setTimeout(bitcoin, 1000);
}

const buyBitcoin = () => {
  setAccount([])
}


useEffect(() => {
  bitcoin();
}, 
[]);

  return (
    <p>
      <div className="price">{bitcoinPrice} PLN</div>
      <div className="account">{account[0]} PLN</div>
      <div className="button">{buyBitcoin}</div>
    </p>
  );
}

export default App;
