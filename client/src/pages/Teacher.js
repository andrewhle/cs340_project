import React from "react";
import { useState, useEffect } from "react";
import AddTeacher from "../components/AddTeacher";
import SearchTeacher from "../components/SearchTeacher";
import TeacherItem from "./TeacherItem";

function Teacher() {
  const [teacher, setTeacher] = useState([]);

  const handleAddTeacher = teacher => {
    //read up about concat() in JS
    //concat merge 2 array together and return a new array contain both array
    setTeacher(prevState => prevState.concat(teacher));
  };

  const loadTeacher = function () {
    fetch(`https://gravityfalluniversity.herokuapp.com/teacher`)
      .then(res => res.json())
      .then(data => setTeacher(data));
  };

  const handleDelete = async id => {
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/teacher/${id}`,
        { method: "DELETE" }
      );
      // if the request is successful, set course array that doesn't contain deleted course
      if (response.status === 200) {
        setTeacher(prevState =>
          prevState.filter(teacher => teacher.teacher_id !== id)
        );
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to delete teacher by id ${id}`,
      });
    }
  };

  const handleEdit = async newTeacher => {
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/teacher/${newTeacher.teacher_id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTeacher),
        }
      );
      if (response.status === 200) {
        setTeacher(prevState => {
          const oldTeacher = [...prevState]; //assign every old value to a variable
          const teacherIdx = oldTeacher.findIndex(
            teacher => teacher.teacher_id === newTeacher.teacher_id
          ); //locate the update course by id and return the index of course object
          console.log(teacherIdx);
          oldTeacher[teacherIdx] = newTeacher;
          return oldTeacher;
        });
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to update teacher by id ${newTeacher.teacher_id}`,
      });
    }
  };

  useEffect(() => loadTeacher(), []);
  return (
    <div>
      <h2>Teacher Page</h2>
      <table>
        <thead>
          <tr>
            <th>Teacher id</th>
            <th>Department id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {teacher.map(teacher => (
            <TeacherItem
              key={teacher.teacher_id}
              teacher={teacher}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>

      <div className="block-container">
        <AddTeacher handleAddTeacher={handleAddTeacher} />
        <SearchTeacher />
      </div>
    </div>
  );
}

export default Teacher;
