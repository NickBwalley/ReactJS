import React from 'react';

function App(){
  const sayHello = () =>{
    console.log("Hello Kenya!");
  };
  return(
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHello}>Hello</button>
    </div>
  )
}

export default App;