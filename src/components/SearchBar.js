import React from "react";

class SearchBar extends React.Component {
  state = { search: "" };
  onInputChange = (event) => {
    this.setState({ search: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Movie Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
