import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

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
            <td>
              <MdEdit />
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="block-container">
        <div className="block-1">
          <h4>Adding Teacher</h4>
          <form>
            <input type="text" placeholder="Enter Employee Id"></input>
            <input type="text" placeholder="Enter Department Id"></input>
            <input type="text" placeholder="Enter Teacher Name"></input>
            <button>Add</button>
          </form>
        </div>
        <div className="block-2">
          <h4>Search Teacher</h4>
          <form>
            <input type="text" placeholder="Enter Employee Id"></input>
            <input type="text" placeholder="Enter Department Id"></input>
            <input type="text" placeholder="Enter Teacher Name"></input>
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
