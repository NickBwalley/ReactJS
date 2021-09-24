import React from "react";
import ReactDOM from "react-dom";
import GetLocalTime from "./GetLocalTime";
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

  // avoiding conditionals in Render
  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDetail lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request..." />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
// Render component to the screen
ReactDOM.render(<GetLocalTime />, document.querySelector("#root"));
