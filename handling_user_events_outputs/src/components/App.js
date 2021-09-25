import React from "react";
import SearchBar from "./SearchBar";
import PasswordField from "./PasswordField";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <hr />
        <PasswordField />
      </div>
    );
  }
}

export default App;
