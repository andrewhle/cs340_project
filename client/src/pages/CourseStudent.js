import React from "react";
import { useState, useEffect } from "react";
import AddCourseStudent from "../components/AddCourseStudent";
import CourseStudentItem from "./CourseStudentItem";
import SearchCourseStudent from "../components/SearchCourseStudent";

function CourseStudent() {
  const [CourseStudent, setCourseStudent] = useState([]);

  const handleAddCourseStudent = CourseStudent => {
    //read up about concat() in JS
    //concat merge 2 array together and return a new array contain both array
    setCourseStudent(prevState => prevState.concat(CourseStudent));
  };

  const handleDelete = async id => {
    // call delete api
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/course_student/${id}`,
        {
          method: "DELETE",
        }
      );
      // if the request is successful, set course array that doesn't contain deleted course
      if (response.status === 200) {
        setCourseStudent(prevState =>
          prevState.filter(
            CourseStudent => CourseStudent.course_student_id !== id
          )
        );
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to delete Course_Student by id ${id}`,
      });
    }
  };

  const handleEdit = async newCourseStudent => {
    // if the request is successful, replace the old course in array with new course.
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/course_student/${newCourseStudent.course_student_id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCourseStudent),
        }
      );
      if (response.status === 200) {
        setCourseStudent(prevState => {
          const oldCourseStudent = [...prevState]; //assign every old value to a variable
          const CourseStudentIdx = oldCourseStudent.findIndex(
            CourseStudent =>
              CourseStudent.course_student_id ===
              newCourseStudent.course_student_id
          ); //locate the update course by id and return the index of course object
          oldCourseStudent[CourseStudentIdx] = newCourseStudent;
          return oldCourseStudent;
        });
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to update course by id ${newCourseStudent.course_student_id}`,
      });
    }
  };

  const loadCourseStudent = function () {
    fetch(`https://gravityfalluniversity.herokuapp.com/course_student`)
      .then(res => res.json())
      .then(data => setCourseStudent(data));
  };

  useEffect(() => loadCourseStudent(), []);
  return (
    <div>
      <h2>Course_Student Page</h2>
      <table>
        <thead>
          <tr>
            <th>Course_Student id</th>
            <th>Course id</th>
            <th>Student id</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {CourseStudent.map(CourseStudent => (
            <CourseStudentItem
              key={CourseStudent.course_student_id}
              CourseStudent={CourseStudent}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>

      <div className="block-container">
        <AddCourseStudent handleAddCourseStudent={handleAddCourseStudent} />

        <SearchCourseStudent />
      </div>
    </div>
  );
}

export default CourseStudent;
