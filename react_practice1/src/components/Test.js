import React from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class Test extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      "https://api.unsplash.com//search/photos",
      {
        headers: {
          Authorization:
            "Client-ID DCJojAQKTzchib0BiOAvx-o79ufwyGT3F_MsLcDJqPo",
        },
        params: {
          query: term,
        },
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default Test;
