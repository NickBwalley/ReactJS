import React from "react";
import PasswordField from "./PasswordField";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PasswordField />
      </div>
    );
  }
}

export default App;
