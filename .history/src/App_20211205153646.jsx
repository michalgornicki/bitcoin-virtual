import React, { useState } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(1);

const setPrice = () => {
  random = Math.random
}

  return (
    <p>
      <div>{bitcoinPrice}</div>
    </p>
  );
}

export default App;
