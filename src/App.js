
import './App.css';
import React, { useState } from 'react';
import "animate.css"


function App() {
  
  const [count, setCount] = useState(0);

  const clear=(e)=>{

  }

  const handleKey=(e)=>{

  }
  
  const handleClick=(e)=>{

  }

  const back=(e)=>{

  }

  const result=(e)=>{

    
  }

  const buttons =[{
     className: 'item1 button',
     id:'Esc',
     name:'Esc',
     onclick:{clear},
     onkeypress:{handleKey},
     children:'AC'
  },
  {
    className: 'item2 button',
    id:'backspace',
    name:'backspace',
    onclick:{back},
    onkeypress:{handleKey},
    children:'≪'
  },
  {
    className: 'item3 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'÷'
  },
  {
    className: 'item4 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'7'
  },
  {
    className: 'item5 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'8'
  },
  {
    className: 'item6 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'9'
  },
  {
    className: 'item7 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'+'
  },
  {
    className: 'item8 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'4'
  },
  {
    className: 'item9 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'5'
  },
  {
    className: 'item10 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'6'
  },
  {
    className: 'item11 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'-'
  },
  {
    className: 'item12 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'1'
  },
  {
    className: 'item13 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'2'
  },
  {
    className: 'item14 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'3'
  },
  {
    className: 'item15 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'×'
  },
  {
    className: 'item16 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'0'
  },
  {
    className: 'item17 button',
    id:'Esc',
    name:'Esc',
    onclick:{handleClick},
    onkeypress:{handleKey},
    children:'.'
  },
  {
    className: 'item18 button',
    id:'Esc',
    name:'Esc',
    onclick:{result},
    onkeypress:{handleKey},
    children:'='
  },

]



  
  
    
   

  return(

    <div className="container">
      <h1>CALCULATOR</h1>
      <form>
        <input className="box" type="text" value={count}/>
      </form>
       <div className="keys">
         {
          buttons.map(button=>(
            <button{...button}/>

          ))
         }
        
      </div>

    </div>
  );
}
  
export default App;
