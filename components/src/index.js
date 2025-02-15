// import react libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// creating React components
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Sam"
          timeAgo="Today at 4:45PM"
          blogPost="Django is the best framework for python!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Jane"
          timeAgo="Today at 2:00AM"
          blogPost="React is the best framework for JavaScript"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Alex"
          timeAgo="Yesterday at 5:00PM"
          blogPost="Hey dummy head React is not a framework its a library"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// render the React Application to the screen
ReactDOM.render(<App />, document.querySelector("#root"));

// cdn - Content Delivery Network.
