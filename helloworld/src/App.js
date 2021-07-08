import React from 'react';
import Tweet from './Tweet';
import "./App.css";

function App(){
  // const sayHello = () =>{
  //   console.log("Hello Kenya!");
  // };
  return(
    <div className="app">
      <h1>Hello React!</h1>            
      <Tweet/>
      <br/>
      <Tweet/>
    </div>
  )
}

export default App;