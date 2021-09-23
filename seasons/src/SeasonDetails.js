import React from "react";

// class based Component
class SeasonDetails extends React.Component {
  constructor(props) {
    super(props); // this is a reference to the super class constructor

    // initializing the state
    this.state = { lat: null, errMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (this.state.lat && !this.state.errMessage) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading! Please wait!</div>;
  }
}

export default SeasonDetails;
