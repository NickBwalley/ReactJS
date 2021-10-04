import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import ClickToCount from "./components/ClickToCount";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];
export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <div>
      <br />
      {/*<Accordion items={items} />
      <ClickToCount />
      <Search />*/}
      <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle DropDown
      </button>
      {showDropDown ? (
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};
