// import React Libraries
import React from 'react';
import ReactDOM from 'react-dom';

function buttonLabel(){
    return 'click me';
}

// create React components
const App = () => {
    const labelText = 'Enter Username: ';
    return(
        <div>
            <label htmlFor="name">{labelText}</label>
            <input id = "name" type = "text" />
            <button style={{backgroundColor: 'green', color: '#fff'}}>{buttonLabel()}</button>
        </div>
    );
}

//create ReactDOM element display elements on the screen
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);