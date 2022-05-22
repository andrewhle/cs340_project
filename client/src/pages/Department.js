import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

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
            <input type="text" placeholder="Enter Department Id"></input>
            <input type="text" placeholder="Enter Employee Id"></input>
            <input type="text" placeholder="Enter Major Id"></input>
            <input type="text" placeholder="Enter Department Name"></input>
            <input type="number" placeholder="Enter Department Credit"></input>
            <button>Add</button>
          </form>
        </div>

        <div className="block-2">
          <h4>Search Department</h4>
          <form>
            <input type="text" placeholder="Enter Department Id"></input>
            <input type="text" placeholder="Enter Employee Id"></input>
            <input type="text" placeholder="Enter Major Id"></input>
            <input type="text" placeholder="Enter Department Name"></input>
            <input type="number" placeholder="Enter Department Credit"></input>
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Department;
