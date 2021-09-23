import React from "react";
import ReactDOM from "react-dom";
import SeasonDetails from "./SeasonDetails";

class App extends React.Component {
  // constructor
  constructor(props) {
    super(props); // is a reference to the parents constructor function

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called setState!!!
        this.setState({ lat: position.coords.latitude });

        // we DID NOT!!!
        // this.state.lat = position.coords.latitude;
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render()
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<SeasonDetails />, document.querySelector("#root"));
