import React from "react";

function SearchMajor() {
  return (
    <div className="block-1">
      <h4>Search Major</h4>
      <form>
        <input type="number" placeholder="Enter Major Id"></input>
        <input type="number" placeholder="Enter Department Id"></input>
        <input type="text" placeholder="Enter Major Name"></input>
        <input type="number" placeholder="Enter Major Credit"></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchMajor;
