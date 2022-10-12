import React from "react";

export default function Searchbar({ searchfield, searchChange }) {
  return (
    <div className="pa2">
      <input
        style={{ background: "#90EE90", outline: "none" }}
        className="pa3"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}
