import React, { useState } from 'react';
import SpitBoxLogo from './images/spitBoxLogo_2.svg'

import './App.css';

function App() {

  const [nameResult, isLoading] = useDataFetch(`https://api.diversitydata.io/?fullname=${fullName}`, fullName)

  return (
    <div className="App">
      <figure id="logo">
        <img src={SpitBoxLogo} alt="Spit Box Logo" />
      </figure>
      <p>Spit in the box provided, then click the button below to run the test</p>
      <button id="testSpit" onClick={() => setName(generateName)}>Test Spit</button>
      {
        name !== '' &&
        <p>{name}</p>
      }
    </div>
  );
}

export default App;
