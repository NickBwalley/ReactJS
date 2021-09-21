import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Nick"
          timeAgo="Yesterday at 23:00PM"
          comment="Implement Merge Sort!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Allan"
          timeAgo="Today at 17:00PM"
          comment="Done next?!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          author="Willaam"
          timeAgo="Today at 20:00PM"
          comment="Good Job Verified!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
