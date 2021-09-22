import React from "react";
import ReactDOM from "react-dom";
// import SeasonDetails from "./SeasonDetails";

class App extends React.Component {
  // constructor
  constructor(props) {
    super(props); // is a reference to the parents constructor function
    this.state = { lat: 40 };
  }

  // React says we have to define render()
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
