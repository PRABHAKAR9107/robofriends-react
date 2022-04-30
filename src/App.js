import React, { Component } from "react";

import Cardlist from "./Cardlist";
import { robots } from "./robots";

import Searchbar from "./Searchbar";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onsearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div>
        <div className="tc">
          <h1>Robofriends</h1>

          <Searchbar searchChange={this.onsearchChange} />

          <Cardlist robots={filteredRobots} />
        </div>
      </div>
    );
  }
}
