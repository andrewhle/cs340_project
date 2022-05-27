import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import AddCourse from "../components/AddCourse";

function Course() {
  const [course, setCourse] = useState([]);

  const loadCourse = function () {
    fetch(`/course`)
      .then(res => res.json())
      .then(data => setCourse(data));
  };

  const handleAddCourse = course => {
    //read up about concat() in JS
    //concar merge 2 array together and return a new array contain both array
    setCourse(prevState => prevState.concat(course));
  };

  useEffect(() => loadCourse(), []);

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
          {course.map(course => (
            <tr key={course.course_id}>
              <td>{course.course_id}</td>
              <td>{course.course_name}</td>
              <td>{course.course_credit}</td>
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
      <AddCourse handleAddCourse={handleAddCourse} />
    </div>
  );
}

export default Course;
