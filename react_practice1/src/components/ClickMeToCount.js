import React from "react";

class ClickMeToCount extends React.Component {
  state = { count: 0 };

  onButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.onButtonClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickMeToCount;
