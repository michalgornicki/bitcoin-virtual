import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Bitcoin from "./bitcoin.png";
import Wallet from "./money.png";



function App() {
  const [bitcoinPrice, setBitcoinPrice] = useState(5000);
  const [ethereumPrice, setEthereumPrice] = useState(300);
  const [accountPLN, setAccountPLN] = useState(10000);
  const [accountBTC, setAccountBTC] = useState(0);
  const [accountETH, setAccountETH] = useState(0);

  useEffect(() => {
    bitcoin();
    ethereum();
  }, []);

  const bitcoin = () => {
    let randomNumber = parseFloat((Math.random() * 20 - 10).toFixed(3));
    setBitcoinPrice((bitcoinPrice) =>
      parseFloat((bitcoinPrice + randomNumber).toFixed(3))
    );
    setTimeout(bitcoin, 1000);
  };

  const ethereum = () => {
    let randomNumber = parseFloat((Math.random() * 20 - 10).toFixed(3));
    setBitcoinPrice((ethereumPrice) =>
      parseFloat((ethereumPrice + randomNumber).toFixed(3))
    );
    setTimeout(ethereum, 1000);
  };


  let percentValue = () => 
    "(" +
    parseFloat((((bitcoinPrice - 5000) / bitcoinPrice) * 100).toFixed(2)) +
    "%)";

    let percentValueEth = () => 
    "(" +
    parseFloat((((ethereumPrice - 5000) / ethereumPrice) * 100).toFixed(2)) +
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

  const buyEthereum = () => {
    if (accountPLN >= 1000) {
      setAccountPLN(accountPLN - 1000);
      setAccountETH((accountETH) =>
        parseFloat((accountETH + 1000 / ethereumPrice).toFixed(6))
      );
    } else {
      setAccountPLN(0);
      setAccountBTC((accountETH) =>
        parseFloat((accountETH + accountETH / bitcoinPrice).toFixed(6))
      );
    }
  };

  const buyMAXEthereum = () => {
    setAccountPLN(0);
    setAccountETH((accountETH) =>
      parseFloat((accountETH + accountPLN / ethereumPrice).toFixed(6))
    );
  };

  const sellEthereum = () => {
    if (accountETH >= 0.1) {
      setAccountPLN(parseFloat((accountPLN + ethereumPrice / 10).toFixed(6)));
      setAccountETH((accountETH) => parseFloat((accountETH - 0.1).toFixed(6)));
    } else {
      setAccountPLN(
        parseFloat((accountPLN + ethereumPrice * accountETH).toFixed(6))
      );
      setAccountBTC((accountETH) => parseFloat((0).toFixed(6)));
    }
  };

  const sellMAXEthereum = () => {
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
        <Button variant="primary m-1 btn-lg " onClick={buyEthereum}>
          Buy ETH for 1000 PLN
        </Button>
        <Button variant="primary m-1 btn-lg " onClick={buyMAXEthereum}>
          Buy ETH for MAX PLN
        </Button>
        <Button variant="secondary m-1 btn-lg " onClick={sellEthereum}>
          Sell 0.1 ETH
        </Button>
        <Button variant="secondary m-1 btn-lg " onClick={sellMAXEthereum}>
          Sell MAX ETH
        </Button>
      </div>

      <div className="account-container">
      <img className="icon-wallet" src={Wallet} alt=""/>
        <div className="account">TOTAL BALANCE:</div>
        <div className="account">{accountPLN} PLN</div>
        <div className="account">{accountBTC} BTC</div>
        <div className="account">{accountETH} ETH</div>
      </div>


    </div>
  );
}

export default App;
