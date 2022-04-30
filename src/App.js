import React from "react";

import Cardlist from "./Cardlist";
import { robots } from "./robots";

import Searchbar from "./Searchbar";
import "./App.css";
export default function App() {
  return (
    <div className="tc">
      <h1>Robofriends</h1>

      <Searchbar />

      <Cardlist robots={robots} />
    </div>
  );
}
