import React from "react";
import SearchBar from "./SearchBar";
// import PasswordField from "./PasswordField";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID DCJojAQKTzchib0BiOAvx-o79ufwyGT3F_MsLcDJqPo",
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <hr />
      </div>
    );
  }
}

export default App;
