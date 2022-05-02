import React, { Component } from "react";

import Cardlist from "./Cardlist";
import { robots } from "./robots";

import Searchbar from "./Searchbar";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // robots: robots, //Before api

      robots: [],
      searchfield: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    //React Lifecycles
    fetch("https://jsonplaceholder.typicode.com/users") //Fetch API
      .then((response) => response.json())

      .then((users) => this.setState({ robots: users }));

    // console.log("mountd");
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

    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div>
          <div className="tc head ">
            <h1 className="f1">Robofriends</h1>

            <Searchbar searchChange={this.onsearchChange} />
          </div>
          <div className="tc">
            <Cardlist robots={filteredRobots} />
          </div>
        </div>
      );
    }
  }
  // console.log("render");
}

//smart Components:- have state and tent to have this class syntax.

//Follow this article:- https://reactjs.org/docs/faq-ajax.html
