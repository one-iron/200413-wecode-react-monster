import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        className="search"
        type="search"
        placeholder="Search..."
        onChange={this.props.handleChange}
        //onChange={()=>this.porps.handleChange(3)}
      />
    );
  }
}

export default SearchBox;
