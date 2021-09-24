import React from "react";
import ReactDOM from "react-dom";
import SeasonDetail from "./SeasonDetail";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDetail lat={this.state.lat} />;
    }
    return <Spinner />;
  }
}
// Render component to the screen
ReactDOM.render(<App />, document.querySelector("#root"));
