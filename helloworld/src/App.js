import React from 'react';
import React, {useState} from 'react';
import Tweet from './Tweet';
import "./App.css";

function App(){
  // const sayHello = () =>{
  //   console.log("Hello Kenya!");
  // };
    const [isRed, setRed] = useState(false);
    const[count, setCount] = useState(0);
    const increment = () =>{
      setCount(count + 1);
    };
  return(
    <div className="app">
      <Tweet name="David Blaine" message="I am a Great Magician"/>
      <Tweet name="Aaron Spears" message="I am the best Drummist"/>
      <Tweet name="Jay Cutler" message="Four Time Mr.Olympia"/>
      <Tweet name="Ronnie Coleman" message="Eight Time Mr.Olympia"/>
      <button onClick={increment}>Increment </button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;