import React from "react";
import ReactDOM from "react-dom";
// import SeasonDetails from "./SeasonDetails";

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
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
