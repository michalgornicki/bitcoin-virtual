import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState(5000);
  const [accountPLN, setAccountPLN] = useState(10000);
  const [accountBTC, setAccountBTC] = useState(0);
  const [change, setChange] = useState(0);

  const bitcoin = () => {
    let randomNumber = parseFloat((Math.random() * 20 - 10).toFixed(3));
    setBitcoinPrice((bitcoinPrice) =>
      parseFloat((bitcoinPrice + randomNumber).toFixed(3))
    );
    console.log(bitcoinPrice);

    setChange(5000 - bitcoinPrice);
    console.log(change);

    setTimeout(bitcoin, 1000);
  };

  const change = 

  const buyBitcoin = () => {
    if (accountPLN >= 1000) {
      setAccountPLN(accountPLN - 1000);
      setAccountBTC((accountBTC) =>
        parseFloat((accountBTC + 1000 / bitcoinPrice).toFixed(6))
      );
      console.log(accountBTC);
    } else {
      setAccountPLN(0);
      setAccountBTC((accountBTC) =>
        parseFloat((accountBTC + accountPLN / bitcoinPrice).toFixed(6))
      );
    }
  };

  const buyMAXBitcoin = () => {
      setAccountPLN(0);
      setAccountBTC((accountBTC) =>
        parseFloat((accountBTC + accountPLN/bitcoinPrice).toFixed(6))
      );
      console.log(accountBTC);
  };

  const sellBitcoin = () => {
    if (accountBTC >= 0.1) {
      setAccountPLN(parseFloat((accountPLN + bitcoinPrice / 10).toFixed(6)));
      setAccountBTC((accountBTC) => parseFloat((accountBTC - 0.1).toFixed(6)));
      console.log(accountBTC);
    } else {
      setAccountPLN(
        parseFloat((accountPLN + bitcoinPrice * accountBTC).toFixed(6))
      );
      setAccountBTC((accountBTC) => parseFloat((0).toFixed(6)));
    }
  };

  const sellMAXBitcoin = () => {
      setAccountPLN(parseFloat((accountPLN + bitcoinPrice*accountBTC).toFixed(6)));
      setAccountBTC(0);
      console.log(accountBTC);
  };

  useEffect(() => {
    bitcoin();
  }, []);

  return (
    <div className="wrapper">
      <div className="price">1 BTC = {bitcoinPrice} PLN {change}</div>
      <div className="account-container">
        <div className="account">TOTAL BALANCE:</div>
        <div className="account">{accountPLN} PLN</div>
        <div className="account">{accountBTC} BTC</div>
      </div>

      <div className="button-container w-50 m-auto">
        <Button variant="primary m-1 btn-lg w-50" onClick={buyBitcoin}>
          Buy BTC for 1000 PLN
        </Button>
        <Button variant="outline-primary m-1 btn-lg w-50" onClick={buyMAXBitcoin}>
          Buy BTC for MAX PLN
        </Button>
        <Button variant="success m-1 btn-lg w-50" onClick={sellBitcoin}>
          Sell 0.1 BTC
        </Button>
        <Button variant="outline-success m-1 btn-lg w-50" onClick={sellMAXBitcoin}>
          Sell MAX BTC
        </Button>
      </div>
    </div>
  );
}

export default App;