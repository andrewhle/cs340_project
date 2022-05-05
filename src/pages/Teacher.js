import React from "react";

function Teacher() {
  return (
    <div>
      <h2>Teacher Page</h2>
      <table>
        <thead>
          <tr>
            <th>Employee id</th>
            <th>Department id (FK)</th>
            <th>Teacher Name</th>
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

export default Teacher;
