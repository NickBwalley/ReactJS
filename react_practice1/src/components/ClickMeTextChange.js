import React from "react";

class ClickMeTextChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  onButtonClick = () => {
    this.setState({ change: !this.state.change });
  };
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Click me!</button>
        {this.state.change ? (
          <h1>Welcome to my Website!</h1>
        ) : (
          <h1>You are now a programmer!</h1>
        )}
      </div>
    );
  }
}

export default ClickMeTextChange;
