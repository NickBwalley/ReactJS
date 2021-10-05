import React, { useState } from "react";

const ClickMeToCount = () => {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onButtonClick}>Click me!</button>
    </div>
  );
};

export default ClickMeToCount;
