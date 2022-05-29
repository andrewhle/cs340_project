import React from "react";

function SearchCourse() {
  return (
    <div className="block-2">
      <h4>Search Course</h4>
      <form>
        <input type="text" placeholder="Enter Course Id"></input>
        <input type="text" placeholder="Enter Course Name"></input>
        <input type="number" placeholder="Enter Course Credit"></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchCourse;
