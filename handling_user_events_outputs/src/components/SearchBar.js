import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Image search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
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
