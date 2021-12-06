import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Bitcoin from "./bitcoin.png";
import Wallet from "./money.png";



function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState(5000);
  const [accountPLN, setAccountPLN] = useState(10000);
  const [accountBTC, setAccountBTC] = useState(0);

  useEffect(() => {
    bitcoin();
  }, []);

  const bitcoin = () => {
    let randomNumber = parseFloat((Math.random() * 20 - 10).toFixed(3));
    setBitcoinPrice((bitcoinPrice) =>
      parseFloat((bitcoinPrice + randomNumber).toFixed(3))
    );
    setTimeout(bitcoin, 1000);
  };


  let percentValue = () => 
    "(" +
    parseFloat((((bitcoinPrice - 5000) / bitcoinPrice) * 100).toFixed(2)) +
    "%)";



  const buyBitcoin = () => {
    if (accountPLN >= 1000) {
      setAccountPLN(accountPLN - 1000);
      setAccountBTC((accountBTC) =>
        parseFloat((accountBTC + 1000 / bitcoinPrice).toFixed(6))
      );
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
      parseFloat((accountBTC + accountPLN / bitcoinPrice).toFixed(6))
    );
  };

  const sellBitcoin = () => {
    if (accountBTC >= 0.1) {
      setAccountPLN(parseFloat((accountPLN + bitcoinPrice / 10).toFixed(6)));
      setAccountBTC((accountBTC) => parseFloat((accountBTC - 0.1).toFixed(6)));
    } else {
      setAccountPLN(
        parseFloat((accountPLN + bitcoinPrice * accountBTC).toFixed(6))
      );
      setAccountBTC((accountBTC) => parseFloat((0).toFixed(6)));
    }
  };

  const sellMAXBitcoin = () => {
    setAccountPLN(
      parseFloat((accountPLN + bitcoinPrice * accountBTC).toFixed(6))
    );
    setAccountBTC(0);
  };

  return (
    <div className="wrapper">


      <div className="price">
        <img className="icon" src={Bitcoin} alt=""/>
        1 BTC = {bitcoinPrice}{" "} PLN
        <div className="percent" style={{ color: bitcoinPrice > 5000 ? 'rgb(9, 255, 0)' : 'rgb(255, 39, 39)' }}> {percentValue()} </div>
      </div>


      <div className="button-container w-50">
        <Button variant="primary m-1 btn-lg " onClick={buyBitcoin}>
          Buy BTC for 1000 PLN
        </Button>
        <Button variant="primary m-1 btn-lg " onClick={buyMAXBitcoin}>
          Buy BTC for MAX PLN
        </Button>
        <Button variant="secondary m-1 btn-lg " onClick={sellBitcoin}>
          Sell 0.1 BTC
        </Button>
        <Button variant="secondary m-1 btn-lg " onClick={sellMAXBitcoin}>
          Sell MAX BTC
        </Button>
      </div>

      <div className="account-container">
        <div className="account">TOTAL BALANCE:</div>
        <div className="account">{accountPLN} PLN</div>
        <div className="account">{accountBTC} BTC</div>
      </div>


    </div>
  );
}

export default App;