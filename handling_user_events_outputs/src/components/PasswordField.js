import React from "react";

class PasswordField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui forms">
          <div classNam="field">
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          {this.state.password.length < 4
            ? "Password must be atleast 4 characters!"
            : ""}
        </form>
      </div>
    );
  }
}

export default PasswordField;
