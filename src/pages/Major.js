import React from "react";

function Major() {
  return (
    <div>
      <h2>Major Page</h2>
      <table>
        <thead>
          <tr>
            <th>Major id</th>
            <th>Department id (FK)</th>
            <th>Major Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data</td>
            <td>Data2</td>
            <td>Data3</td>
            <td>Icon</td>
            <td>Icon</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Major;
