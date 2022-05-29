import React from "react";

function SearchStudent() {
  return (
    <div className="block-1">
      <h4>Search Student</h4>
      <form>
        <input type="text" placeholder="Enter Student Id"></input>
        <input type="text" placeholder="Enter First Name"></input>
        <input type="text" placeholder="Enter Last Name"></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default SearchStudent;
