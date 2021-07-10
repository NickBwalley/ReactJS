import React, {useState} from "react";
import Tweet from './Tweet';


function App(){
  // const sayHello = () =>{
  //   console.log("Hello Kenya!");
  // };
    // const [isRed, setRed] = useState(false);
    // const[count, setCount] = useState(0);

    // const increment = () =>{
    //   setCount(count + 1);
    //   setRed(!isRed);
    // };
    const [users, setUsers] = useState([
      {name: "Ed", message: "Hello Ed-sheeran!"},
      {name: "Traversy", message: "I am a professor!"},
      {name: "David Blaine", message: "It s all an illusion!"}
    ]);
  return(
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;