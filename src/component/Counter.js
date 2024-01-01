import React, { useState } from 'react';

// lets Learn STATE

function Counter() {

// console.log("Counter");

  // let number = 0;
// function handleclick(e) {
//     number++;
//     console.log(number);
// }
   

  const [number, setNumber] = useState(0);

  function handleclick() {
    
    setNumber(number=> number+1);
    console.log(number);

  }

//   console.log("render counter");

  return (
    <>
      <div style={{ color: "black" }}>{number}</div>
      <button onClick={handleclick}>counter</button>
    </>
  );
}

export default Counter;
