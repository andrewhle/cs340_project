import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";

function Student() {
  const [student, setStudent] = useState([]);

  const loadStudent = function () {
    fetch(`/student`)
      .then(res => res.json())
      .then(data => setStudent(data));
  };

  useEffect(() => loadStudent(), []);

  return (
    <div>
      <h2>Student Page</h2>
      <table>
        <thead>
          <tr>
            <th>Student id</th>
            <th>Deparment id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {student.map(student => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.dept_id}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>
                <MdEdit />
              </td>
              <td>
                <MdDelete />
              </td>
            </tr>
          ))}
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
