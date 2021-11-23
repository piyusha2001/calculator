import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(" ");

  const clear = (e) => {
    setCount(" ");
  };

  const handleClick = (e) => {
    setCount(count.concat(e.target.name));
  };

  const backspace = (e) => {
    setCount(count.slice(0, count.length-1));
  };

  const result = (e) => {
    setCount(eval(result));
  };

  const buttons = [
    
    {
      className: "item3 button",
      name: "/",
      onClick: handleClick,
      children: "÷",
    },
    {
      className: "item4 button",
      name: "7",
      onClick: handleClick,
      children: "7",
    },
    {
      className: "item5 button",
      name: "8",
      onClick: handleClick,
      children: "8",
    },
    {
      className: "item6 button",
      name: "9",
      onClick: handleClick,
      children: "9",
    },
    {
      className: "item7 button",
      name: "+",
      onClick: handleClick,
      children: "+",
    },
    {
      className: "item8 button",
      name: "4",
      onClick: handleClick,
      children: "4",
    },
    {
      className: "item9 button",
      name: "5",
      onClick: handleClick,
      children: "5",
    },
    {
      className: "item10 button",
      name: "6",
      onClick: handleClick,
      children: "6",
    },
    {
      className: "item11 button",
      name: "-",
      onClick: handleClick,
      children: "-",
    },
    {
      className: "item12 button",
      name: "1",
      onClick: handleClick,
      children: "1",
    },
    {
      className: "item13 button",
      name: "2",
      onClick: handleClick,
      children: "2",
    },
    {
      className: "item14 button",
      name: "3",
      onClick: handleClick,
      children: "3",
    },
    {
      className: "item15 button",
      name: "x",
      onClick: handleClick,
      children: "x",
    },
    {
      className: "item16 button",
      name: "0",
      onClick: handleClick,
      children: "0",
    },
    {
      className: "item17 button",
      name: ".",
      onClick: handleClick,
      children: ".",
    },
  ];

  return (
    <div className="container">
      <h1>CALCULATOR</h1>
      <form>
        <input className="box" type="text" value={count} />
      </form>
      <div className="keys">
        <button className="button item1" name="Esc" onClick={clear}>
          AC
        </button>
        <button className="button item2" name="backspace" onClick={backspace}>
          BACK
        </button>
        <button className="button item18" name="=" onClick={result}>
          =
        </button>

        {buttons.map((button) => (
          <button {...button} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
