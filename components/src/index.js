// import react libraries 
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetail';

// creating React components
const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetails/>
            <CommentDetails/>
            <CommentDetails/>
            <CommentDetails/>
            <CommentDetails/>                            
        </div>
    );
};

// render the React Application to the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

// cdn - Content Delivery Network. 