import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="ui field">
            <label>Image search</label>
            <input type="text" onChange={this.onInputChange} />
            {/* onChange is a callback function */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/* 
1. Arrow Function
onChange={(event) => console.log(event.target.value)} 
2. callback function (instead of using () you just leave it inside the other function.)*/
