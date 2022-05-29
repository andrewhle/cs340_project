import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import AddStudent from "../components/AddStudent";
import SearchStudent from "../components/SearchStudent";

function Student() {
  const [student, setStudent] = useState([]);

  const loadStudent = function () {
    fetch(`/student`)
      .then((res) => res.json())
      .then((data) => setStudent(data));
  };

  const handleAddStudent = (student) => {
    //read up about concat() in JS
    //concar merge 2 array together and return a new array contain both array
    setStudent((prevState) => prevState.concat(student));
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
            <th>Date of Birth</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {student.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.dept_id}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>
                {new Date(student.date_of_birth).toISOString().slice(0, 10)}
              </td>
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
        <AddStudent handleAddStudent={handleAddStudent} />
        <SearchStudent />
      </div>
    </div>
  );
}

export default Student;
