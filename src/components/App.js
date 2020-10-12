import React from "react";
import SearchBar from "./SearchBar";
import omdb from "../apis/omdb";

class App extends React.Component {
  state = { movies: "" };
  onSearchSubmit = async (term) => {
    const response = await omdb.get("");
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
