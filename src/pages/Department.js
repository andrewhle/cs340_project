import React from "react";

function Department() {
  return (
    <div>
      <h2>Department Page</h2>
      <table>
        <thead>
          <tr>
            <th>Department id</th>
            <th>Employee id (FK)</th>
            <th>Major id (FK)</th>
            <th>Department Name</th>
            <th>Deepartment Credit</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data</td>
            <td>Data2</td>
            <td>Data3</td>
            <td>Data4</td>
            <td>Data5</td>
            <td>Icon</td>
            <td>Icon</td>
          </tr>
        </tbody>
      </table>

      <h4>Adding Department</h4>
      <form>
        <input type="text" placeholder="Enter Course Id"></input>
        <input type="text" placeholder="Enter Course Name"></input>
        <input type="number" placeholder="Enter Course Credit"></input>
        <button>Add</button>
      </form>

      <h4>Search Department</h4>
      <form>
        <input type="text" placeholder="Enter Department Id"></input>
        <input type="text" placeholder="Enter Department Name"></input>
        <input type="number" placeholder="Enter Course Credit"></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Department;
