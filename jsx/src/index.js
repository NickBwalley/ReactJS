// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    return(
        <div>
            <label className="label" for="name">Enter Name: </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>Submit</button>
        </div>
    );
};

// take the react component and show it on the screen!
ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);

/*JSX vs HTML Differences
1. Adding custom styling to an element uses different syntax
2. Adding a class to an element uses different syntax
3. JSX can reference JS Variables */