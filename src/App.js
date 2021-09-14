
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(" ");
 
  const handleClick=(e)=>{
    setCount(count.concat(e.target.name));


  }
  const clear=(e)=>{
    setCount("");
  }
  
  
  const result=(e)=>{
      setCount(eval(count.toString()))
    }

  
    
   const back=(e)=>{
     setCount(count.slice(0,-1))
   }


  

  
  return(
    <div className="container">
      <form>
        <input className="box" type="text" value={count}/>
      </form>
       <div className="keys">
        <button className="item1" name="AC" onClick={clear}>AC</button>
        <button className="item2" name="backspace" onClick={back}> &#8810;</button>
        <button className="item3" name="/" onClick={handleClick}>&divide;</button>
        <button className="item4" name="7" onClick={handleClick} >7</button>
        <button className="item5" name="8" onClick={handleClick}>8</button>
        <button className="item6" name="9" onClick={handleClick}>9</button>
        <button className="item7" name="+" onClick={handleClick}>+</button>
        <button className="item8" name="4" onClick={handleClick}>4</button>
        <button className="item9" name="5" onClick={handleClick}>5</button>
        <button className="item10" name="6" onClick={handleClick}>6</button>
        <button className="item11" name="-" onClick={handleClick}>&minus;</button>
        <button className="item12" name="1" onClick={handleClick}>1</button>
        <button className="item13" name="2" onClick={handleClick}>2</button>
        <button className="item14" name="3" onClick={handleClick}>3</button>
        <button className="item15" name="*" onClick={handleClick}>&times;</button>
        <button className="item16" name="0" onClick={handleClick}>0</button>
        <button className="item17" name="." onClick={handleClick}>.</button>
        <button className="item18" name="=" onClick={result}>=</button>
       
      </div>

    </div>
  )
  }

export default App;
