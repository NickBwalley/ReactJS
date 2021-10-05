import React from "react";
import Unsplash from "../apis/Unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
// import PasswordField from "./PasswordField";
import Test from "./Test";
import ClickMeTextChange from "./ClickMeTextChange";
import ClickMeToCount from "./ClickMeToCount";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const { data } = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: data.results });
  };

  render() {
    return (
      // <div className="ui container" style={{ margin: "10px" }}>
      //   <SearchBar onSubmit={this.onSearchSubmit} />
      //   <ImageList images={this.state.images} />
      // </div>
      // <ClickMeTextChange />
      <ClickMeToCount />
    );
  }
}

export default App;
