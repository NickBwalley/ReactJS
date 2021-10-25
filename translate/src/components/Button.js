import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // static contextType = LanguageContext; //this is how you hook up a context file inside a class component
  // Button.contextType = LanguageContext
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }
  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
        {/* <button className="ui button primary"> {text} </button>; */}
      </button>
    );
  }
}

export default Button;
