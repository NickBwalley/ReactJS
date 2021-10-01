import React from "react";
const useState = React.useState;

const ClickToCount = () => {
  const [count, setCount] = useState(0);
  const onButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={onButtonClick}>Click Me!</button>
    </div>
  );
};

export default ClickToCount;
