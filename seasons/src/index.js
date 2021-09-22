import React from "react";
import ReactDOM from "react-dom";
import SeasonDetails from "./SeasonDetails";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>Hey there!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
