import React from "react";
import axios from "axios";
import PasswordField from "./PasswordField";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      "https://api.unsplash.com//search/photos",
      {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID DCJojAQKTzchib0BiOAvx-o79ufwyGT3F_MsLcDJqPo",
        },
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images.
      </div>
    );
  }
}

export default App;
