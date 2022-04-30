import React from "react";

export default function Searchbar({ searchfield, searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green  bg-lightest blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}
