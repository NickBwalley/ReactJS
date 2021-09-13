// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Dare Click me!';
}
// create a react component
const App = () => {
    const buttonText = {text: 'Click me!'};
    const labelText = 'Enter Name: ';
    return(
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>
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