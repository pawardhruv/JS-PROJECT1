import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  const decreament = ()=>{
    let newCount = count >1 ? count - 1 : 1 ;
    setCount(newCount);
    localStorage.setItem('count',JSON.stringify(newCount));
  }

  const increament = ()=>{
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count',JSON.stringify(newCount));
  }

  useEffect(()=>{
    let oldCount = JSON.parse(localStorage.getItem('count')) || 1;
    setCount(oldCount);
  },[])

  return (
    <>
      <button type="button" onClick={decreament} >-</button>
      <span
       style={{
       border: "2px solid black",
       display: "inline-block",
       padding: "0 10px",
       margin: "0px 10px",
       }}
      >
      {count}
      </span>
      <button type="button" onClick={increament}>+</button>
      </>
  );
};

export default App
