import React from "react";
import { useState, useEffect } from "react";
import AddStudent from "../components/AddStudent";
import SearchStudent from "../components/SearchStudent";
import StudentItem from "./StudentItem";

function Student() {
  const [student, setStudent] = useState([]);

  const loadStudent = function () {
    fetch(`https://gravityfalluniversity.herokuapp.com/student`)
      .then(res => res.json())
      .then(data => setStudent(data));
  };

  const handleAddStudent = student => {
    //read up about concat() in JS
    //concat merge 2 array together and return a new array contain both array
    setStudent(prevState => prevState.concat(student));
  };

  const handleDelete = async id => {
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/student/${id}`,
        { method: "DELETE" }
      );
      // if the request is successful, set course array that doesn't contain deleted course
      if (response.status === 200) {
        setStudent(prevState =>
          prevState.filter(student => student.student_id !== id)
        );
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to delete student by id ${id}`,
      });
    }
  };

  const handleEdit = async newStudent => {
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/student/${newStudent.student_id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        }
      );
      if (response.status === 200) {
        setStudent(prevState => {
          const oldStudent = [...prevState]; //assign every old value to a variable
          const studentIdx = oldStudent.findIndex(
            student => student.student_id === newStudent.student_id
          ); //locate the update course by id and return the index of course object
          console.log(studentIdx);
          oldStudent[studentIdx] = newStudent;
          return oldStudent;
        });
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to update student by id ${newStudent.student_id}`,
      });
    }
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
          {student.map(student => (
            <StudentItem
              key={student.student_id}
              student={student}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
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
