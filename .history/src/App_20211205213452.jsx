import React, { useState, useEffect } from "react";
import "./App.css";
import Button from 'react-bootstrap/Button';

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>

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
    } else {
    }
  };

  const sellBitcoin = () => {
    if (accountBTC >= 0.1) {
      setAccountPLN(parseFloat((accountPLN + bitcoinPrice / 10).toFixed(6)));
      setAccountBTC((accountBTC) => parseFloat((accountBTC - 0.1).toFixed(6)));
      console.log(accountBTC);
    } else {
    }
  };

  useEffect(() => {
    bitcoin();
  }, []);

  return (
    <p>
      <div className="price">BTC = {bitcoinPrice} PLN</div>
      <div className="account-container">
        <div className="account">ACCOUNT BALLANCE:</div>
        <div className="account">{accountPLN} PLN</div>
        <div className="account">{accountBTC} BTC</div>
      </div>
      <div className="button-container">
        <button variant="primary" onClick={buyBitcoin}>Buy BTC for 1000 PLN</button>
        <Button variant="primary">Primary</Button>{' '}
        <div className="button" onClick={sellBitcoin}>
          Sell 0.1 BTC
        </div>
      </div>
    </p>
  );
}

export default App;
