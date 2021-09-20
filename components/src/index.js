// import react libraries 
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetail';

// creating React components
const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetails author="Sam" blogPost="Django is the best framework for python!"/>
            <CommentDetails author="Jane" blogPost="React is the best framework for JavaScript"/>
            <CommentDetails author="Alex"blogPost="Hey dummy head React is not a framework its a library"/>               
        </div>
    );
};

// render the React Application to the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

// cdn - Content Delivery Network. 