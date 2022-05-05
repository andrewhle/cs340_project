import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

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
          <h4>Adding Department</h4>
          <form>
            <input type="text" placeholder="Enter Major Id"></input>
            <input type="text" placeholder="Enter Department Id"></input>
            <input type="number" placeholder="Enter Major Credit"></input>
            <button>Add</button>
          </form>
        </div>

        <div className="block-2">
          <h4>Search Department</h4>
          <form>
            <input type="text" placeholder="Enter Major Id"></input>
            <input type="text" placeholder="Enter Department Id"></input>
            <input type="number" placeholder="Enter Major Credit"></input>
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Major;
