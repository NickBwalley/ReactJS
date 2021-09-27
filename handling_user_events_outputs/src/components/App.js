import React from "react";
import SearchBar from "./SearchBar";
// import PasswordField from "./PasswordField";
import axios from "axios";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID DCJojAQKTzchib0BiOAvx-o79ufwyGT3F_MsLcDJqPo",
      },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <hr />
        Found: {this.state.images.length} images.
      </div>
    );
  }
}

export default App;

// ALTERNATIVE METHOD
/*
onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID DCJojAQKTzchib0BiOAvx-o79ufwyGT3F_MsLcDJqPo",
        },
      })
      .then((response) => {
        // this function will be a callback which will get some data retrieved from some API
        console.log(response);
      });
  } */
