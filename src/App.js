import "./App.css";
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(" ");

  const clear = (e) => {};

  const handleKey = (e) => {};

  const handleClick = (e) => {
       setCount(count.toString(e.target.name));
  };

  const back = (e) => {};

  const result = (e) => {};

  const buttons = [
    {
      className: "item1 button",
      id:"a",
      name: "Esc",
      onClick: clear,
      onKeyPress: handleKey,
      children: "AC",
    },
    {
      className: "item2 button",
      id:"b",
      name: "backspace",
      onClick: back,
      onKeyPress: handleKey,
      children: "≪",
    },
    {
      className: "item3 button",
      id:"c",
      name: "/",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "÷",
    },
    {
      className: "item4 button",
      id:"d",
      name: "7",
      event:onclick=handleClick,
      onKeyPress: handleKey,
      children: "7",
    },
    {
      className: "item5 button",
      id:"e",
      name: "8",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "8",
    },
    {
      className: "item6 button",
      id:"f",
      name: "9",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "9",
    },
    {
      className: "item7 button",
      id:"g",
      name: "+",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "+",
    },
    {
      className: "item8 button",
      id:"h",
      name: "4",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "4",
    },
    {
      className: "item9 button",
      id:"i",
      name: "5",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "5",
    },
    {
      className: "item10 button",
      id:"j",
      name: "6",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "6",
    },
    {
      className: "item11 button",
      id:"k",
      name: "-",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "-",
    },
    {
      className: "item12 button",
      id:"l",
      name: "1",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "1",
    },
    {
      className: "item13 button",
      id:"m",
      name: "2",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "2",
    },
    {
      className: "item14 button",
      id:"n",
      name: "3",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "3",
    },
    {
      className: "item15 button",
      id:"o",
      name: "x",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "x",
    },
    {
      className: "item16 button",
      id:"p",
      name: "0",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: "0",
    },
    {
      className: "item17 button",
      id:"q",
      name: ".",
      onClick: handleClick,
      onKeyPress: handleKey,
      children: ".",
    },
    {
      className: "item18 button",
      id:"r",
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
        {buttons.map((button) => (
          <div  key={button.id}>
          <button {...button} onClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
