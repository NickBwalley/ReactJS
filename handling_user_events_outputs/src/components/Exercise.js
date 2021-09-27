/* Practicing list building
Goal.
1. Given a list of users, print out each user's name inside of an li element
*/
import React from "react";

const users = [
  { id: 1, name: "Mike Powell" },
  { id: 2, name: "Usain Bolt" },
  { id: 3, name: "Justin Gatlin" },
  { id: 4, name: "Mike Bromell" },
];

export default class Exercise extends React.Component {
  render() {
    const renderedUsers = users.map(({ id, name }) => {
      return <li key={id}>{name}</li>;
    });
    return <ul>{renderedUsers}</ul>;
  }
}
