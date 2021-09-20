// import react libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetail";

// creating React components
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails
        author="Sam"
        timeAgo="Today at 4:45PM"
        blogPost="Django is the best framework for python!"
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Jane"
        timeAgo="Today at 2:00AM"
        blogPost="React is the best framework for JavaScript"
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Alex"
        timeAgo="Yesterday at 5:00PM"
        blogPost="Hey dummy head React is not a framework its a library"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

// render the React Application to the screen
ReactDOM.render(<App />, document.querySelector("#root"));

// cdn - Content Delivery Network.
