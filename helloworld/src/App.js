import React from 'react';
import Tweet from './Tweet';
import "./App.css";

function App(){
  // const sayHello = () =>{
  //   console.log("Hello Kenya!");
  // };
  return(
    <div className="app">
      <Tweet name="David Blaine" message="I am a Great Magician"/>
      <Tweet name="Aaron Spears" message="I am the best Drummist"/>
      <Tweet name="Jay Cutler" message="Four Time Mr.Olympia"/>
      <Tweet name="Ronnie Coleman" message="Eight Time Mr.Olympia"/>
      
    </div>
  )
}

export default App;