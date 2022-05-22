import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Course() {
  return (
    <div>
      <h2>Course Page</h2>
      <table>
        <thead>
          <tr>
            <th>Course id</th>
            <th>Course Name</th>
            <th>Course Credit</th>
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
          <h4>Adding Course</h4>
          <form>
            <input type="text" placeholder="Enter Course Id"></input>
            <input type="text" placeholder="Enter Course Name"></input>
            <input type="number" placeholder="Enter Course Credit"></input>
            <button>Add</button>
          </form>
        </div>

        <div className="block-2">
          <h4>Search Course</h4>
          <form>
            <input type="text" placeholder="Enter Course Id"></input>
            <input type="text" placeholder="Enter Course Name"></input>
            <input type="number" placeholder="Enter Course Credit"></input>
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Course;
