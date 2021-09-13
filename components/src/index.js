// import react libraries 
import React from 'react';
import ReactDOM from 'react-dom';

// creating React components
if(module.hot){
    module.hot.accept();
};

const App = () => {
    return <div>Hey there!</div>
};

// render the React Application to the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

// cdn - Content Delivery Network. 