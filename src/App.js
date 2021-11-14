import "./App.css";
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(" ");

  const clear = (e) => {
    setCount(" ")

  };

  const handleKey = (e) => {};

  const handleClick = (e) => {
       setCount(count.concat(e.target.name));
  };

  const back = (e) => {};

  const result = (e) => {
    setCount(count.eval(e.target.name))
  };

  const buttons = [
    
    {
      className: "item2 button",
      
      name: "backspace",
     
      
      onKeyPress: handleKey,
      children: "≪",
    },
    {
      className: "item3 button",
     
      name: "/",
     
      onKeyPress: handleKey,
      children: "÷",
    },
    {
      className: "item4 button",
      
      name: "7",
    
      onKeyPress: handleKey,
      children: "7",
    },
    {
      className: "item5 button",
     
      name: "8",
    
      onKeyPress: handleKey,
      children: "8",
    },
    {
      className: "item6 button",
     
      name: "9",
     
      onKeyPress: handleKey,
      children: "9",
    },
    {
      className: "item7 button",
      
      name: "+",
      
      onKeyPress: handleKey,
      children: "+",
    },
    {
      className: "item8 button",
      
      name: "4",
      
      onKeyPress: handleKey,
      children: "4",
    },
    {
      className: "item9 button",
     
      name: "5",
      
      onKeyPress: handleKey,
      children: "5",
    },
    {
      className: "item10 button",
   
      name: "6",

      onKeyPress: handleKey,
      children: "6",
    },
    {
      className: "item11 button",
     
      name: "-",
   
      onKeyPress: handleKey,
      children: "-",
    },
    {
      className: "item12 button",
      
      name: "1",
      
      onKeyPress: handleKey,
      children: "1",
    },
    {
      className: "item13 button",
     
      name: "2",
    
      onKeyPress: handleKey,
      children: "2",
    },
    {
      className: "item14 button",
      
      name: "3",
     
      onKeyPress: handleKey,
      children: "3",
    },
    {
      className: "item15 button",
      
      name: "x",
     
      onKeyPress: handleKey,
      children: "x",
    },
    {
      className: "item16 button",
      
      name: "0",
     
      onKeyPress: handleKey,
      children: "0",
    },
    {
      className: "item17 button",
     
      name: ".",
     
      onKeyPress: handleKey,
      children: ".",
    },
    {
      className: "item18 button",
     
      name: "=",
      onClick: result,
      onKeyPress: handleKey,
      children: "=",
    },
  ];

  return (
    <div className="container">
      <h1>CALCULATOR</h1>
      <form>
        <input className="box" type="text" value={count} />
      </form>
      <div className="keys">
      <button className="button item1" name="Esc" onClick={clear}>AC</button>
        {buttons.map((button) => (
          
          <button {...button} onClick={handleClick} />
         
        ))}
        
      </div>
    </div>
  );
}

export default App;
