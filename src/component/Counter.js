import React, { useState } from 'react';


function Counter() {

  const [number, setNumber] = useState(0);

  function handleclick() {
    
    setNumber(number=> number+1);
    console.log(number);

  }

  return (
    <>
      <div style={{ color: "black" }}>{number}</div>
      <button onClick={handleclick}>counter</button>
    </>
  );
}

export default Counter;
