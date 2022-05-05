import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Student() {
  return (
    <div>
      <h2>Student Page</h2>
      <table>
        <thead>
          <tr>
            <th>Student id</th>
            <th>First Name</th>
            <th>Last Name</th>
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
          <h4>Adding Student</h4>
          <form>
            <input type="text" placeholder="Enter Student Id"></input>
            <input type="text" placeholder="Enter First Name"></input>
            <input type="text" placeholder="Enter Last Name"></input>
            <button>Add</button>
          </form>
        </div>

        <div className="block-2">
          <h4>Search Student</h4>
          <form>
            <input type="text" placeholder="Enter Student Id"></input>
            <input type="text" placeholder="Enter First Name"></input>
            <input type="text" placeholder="Enter Last Name"></input>
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Student;
