import React from "react";
import Accordion from "./components/Accordion";
import ClickToCount from "./components/ClickToCount";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JavaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among Engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
export default () => {
  return (
    <div>
      <br />
      {/*<Accordion items={items} />
      <ClickToCount />*/}
      <Search />
    </div>
  );
};
