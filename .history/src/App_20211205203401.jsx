import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(5000);


const setPrice = () => {
  let randomNumber = parseFloat((Math.random()*20 - 10).toFixed(3));
  setBitcoinPrice(bitcoinPrice => parseFloat((bitcoinPrice + randomNumber).toFixed(3)));
  setTimeout(setPrice, 1000)
}

const plnPrice = () => {
  let pln = 1/bitcoinPrice;
  document.getElementsByClassName("price")[1].innerHTML = pln;
}



useEffect(() => {
  setPrice();
  plnPrice();
}, []);

  return (
    <p>
      <div className="price">{bitcoinPrice} PLN</div>
      <div className="price"></div>
    </p>
  );
}

export default App;
