import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState(5000);
  const [accountPLN, setAccountPLN] = useState([10000]);
  const [accountBTC, setAccountBTC] = useState(0);

  const bitcoin = () => {
    let randomNumber = parseFloat((Math.random() * 20 - 10).toFixed(3));
    setBitcoinPrice((bitcoinPrice) =>
      parseFloat((bitcoinPrice + randomNumber).toFixed(3))
    );
    console.log(bitcoinPrice);
    setTimeout(bitcoin, 1000);
  };

  const buyBitcoin = () => {
    if (accountPLN >= 1000) {
    setAccountPLN(accountPLN - 1000);
    setAccountBTC((accountBTC) =>
      parseFloat((accountBTC + 1000 / bitcoinPrice).toFixed(6))
    );
    console.log(accountBTC);
    }
    else {}
  };

  const sellBitcoin = () => {
    if (accountBTC >= 0.1) {
    setAccountPLN(parseFloat((accountPLN + bitcoinPrice/10).toFixed(6)));
    setAccountBTC((accountBTC) => parseFloat((accountBTC - 0.1).toFixed(6)));
    console.log(accountBTC);
    }
    else {}
  };

  useEffect(() => {
    bitcoin();
  }, []);

  return (
    <p>
      <div className="price">BTC = {bitcoinPrice} PLN</div>
      <div className="account">{accountPLN} PLN</div>
      <div className="account">{accountPLN} PLN</div>
      <div className="account">{accountBTC} BTC</div>
      <div className="button-container">
      <div className="button" onClick={buyBitcoin}>Sell 1000 PLN</div>
      <div className="button" onClick={sellBitcoin}>Sell 0.1 BTC</div>
      </div>
    </p>
  );
}

export default App;
