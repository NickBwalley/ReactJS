import React from 'react';
import Tweet from './Tweet';
import "./App.css";

function App(){
  // const sayHello = () =>{
  //   console.log("Hello Kenya!");
  // };
  return(
    <div className="app">
      <Tweet name="David Blaine"/>
      <Tweet name="Aaron Spears"/>
      <Tweet name="Jay Cutler"/>
      <Tweet name="Ronnie Coleman"/>
      
    </div>
  )
}

export default App;