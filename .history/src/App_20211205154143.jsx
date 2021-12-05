import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

const [bitcoinPrice, setBitcoinPrice] = useState(1);


const setPrice = () => {
  var random = Math.random;
  setBitcoinPrice(random)
  setTimeout(setPrice, 1000)
}


useEffect(() =>{
  setInterval(setPrice, 1000)
})

  return (
    <p>
      <div>{bitcoinPrice}</div>
    </p>
  );
}

export default App;
