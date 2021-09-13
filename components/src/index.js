// import react libraries 
import React from 'react';
import ReactDOM from 'react-dom';

// creating React components
if(module.hot){
    module.hot.accept();
};

const App = () => {
    return(
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>            
        </div>
    );
};

// render the React Application to the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

// cdn - Content Delivery Network. 