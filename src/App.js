
import './App.css';
import React, { useState } from 'react';
import "animate.css"

function App() {
  
  const [count, setCount] = useState(" ");
 
 
  const result=(e)=>{
         if(e.target.name==="="){ 
         
           setCount(eval(count.toString()));
         }
        
         else{
         
          setCount(count.toString().concat(e.target.name));
          return;
          
              }
     
    }
    const clear=(e)=>{
      setCount(" ")
    }  
    const back=(e)=>{
      setCount(count.slice(0,-1))
    }

    const handleKey=(e)=>{
      if(e.keyCode===Number(e.target.id)){
         result(e.key);
      }
      
    }
 
  
  
    
   

  return(

    <div className="container">
      <h1>CALCULATOR</h1>
      <form>
        <input className="box" type="text" value={count}/>
      </form>
       <div className="keys">
        <button className="item1 button" name="Esc" id="Esc" onClick={clear} onKeyPress={handleKey}>AC</button>
        <button className="item2 button" name="backspace" id="backspace " onClick={back} onKeyPress={handleKey}> &#8810;</button>
        <button className="item3 button" name="/" id=" /" onClick={result} onKeyPress={handleKey}>&divide;</button>
        <button className="item4 button" name="7"  id="7" onClick={result} onKeyPress={handleKey} >7</button>
        <button className="item5 button" name="8"  id="104" onClick={result} onKeyPress={handleKey}>8</button>
        <button className="item6 button" name="9"  id="105" onClick={result} onKeyPress={handleKey}>9</button>
        <button className="item7 button" name="+"  id="107" onClick={result} onKeyPress={handleKey}>+</button>
        <button className="item8 button" name="4"  id="100" onClick={result} onKeyPress={handleKey}>4</button>
        <button className="item9 button" name="5"  id="101" onClick={result} onKeyPress={handleKey}>5</button>
        <button className="item10 button" name="6"  id="102" onClick={result} onKeyPress={handleKey}>6</button>
        <button className="item11 button" name="-"  id="109" onClick={result} onKeyPress={handleKey}>&minus;</button>
        <button className="item12 button" name="1"  id="97" onClick={result} onKeyPress={handleKey}>1</button>
        <button className="item13 button" name="2" id="98"  onClick={result} onKeyPress={handleKey}>2</button>
        <button className="item14 button" name="3" id="99"  onClick={result} onKeyPress={handleKey}>3</button>
        <button className="item15 button" name="*" id="88" onClick={result} onKeyPress={handleKey}>&times;</button>
        <button className="item16 button" name="0" id="96" onClick={result} onKeyPress={handleKey}>0</button>
        <button className="item17 button" name="."  id="190" onClick={result} onKeyPress={handleKey}>.</button>
        <button className="item18 button" name="Enter"  id="187" onClick={result} onKeyPress={handleKey}>=</button>
       
      </div>

    </div>
  );

  }
export default App;
