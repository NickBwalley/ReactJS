import React from "react";

class PasswordField extends React.Component {
  state = { password: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="ui field">
            <label>Password</label>
            <input
              type="text"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          {this.state.password.length < 4
            ? "password must be at least 4 characters"
            : ""}
        </form>
      </div>
    );
  }
}

export default PasswordField;
