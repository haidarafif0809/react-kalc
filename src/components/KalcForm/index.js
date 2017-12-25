import React from 'react';

const KalcForm = ({ onInputChange,perhitungan}) => 
  <form className="App">

    <input 
      type="text"
      value={perhitungan}
      onChange={onInputChange}
      placeholder="Operation"
    />
  </form>;

export default KalcForm;