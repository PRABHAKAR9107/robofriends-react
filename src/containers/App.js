import React, { Component } from "react";

import CardList from "../components/CardList";
import { robots } from "../components/robots";

import Searchbar from "../components/Searchbar";

import Scroll from "../components/Scroll";
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
        <div className="tc">
          <div className=" head ">
            <h1 className="f1">Robofriends</h1>

            <Searchbar searchChange={this.onsearchChange} />
          </div>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
  // console.log("render");
}

//smart Components:- have state and tent to have this class syntax.

//Follow this article:- https://reactjs.org/docs/faq-ajax.html
