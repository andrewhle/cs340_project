import React from "react";
import { useState, useEffect } from "react";
import AddCourse from "../components/AddCourse";
import SearchCourse from "../components/SearchCourse";
import CourseItem from "./CourseItem";

function Course() {
  const [course, setCourse] = useState([]);

  const loadCourse = function () {
    fetch(`https://gravityfalluniversity.herokuapp.com/course`)
      .then(res => res.json())
      .then(data => setCourse(data));
  };

  const handleAddCourse = course => {
    //read up about concat() in JS
    //concat merge 2 array together and return a new array contain both array
    setCourse(prevState => prevState.concat(course));
  };

  const handleDelete = async id => {
    // call delete api
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/course/${id}`,
        { method: "DELETE" }
      );
      // if the request is successful, set course array that doesn't contain deleted course
      if (response.status === 200) {
        setCourse(prevState =>
          prevState.filter(course => course.course_id !== id)
        );
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to delete course by id ${id}`,
      });
    }
  };

  const handleEdit = async newCourse => {
    // if the request is successful, replace the old course in array with new course.
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/course/${newCourse.course_id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCourse),
        }
      );
      if (response.status === 200) {
        setCourse(prevState => {
          const oldCourse = [...prevState]; //assign every old value to a variable
          const courseIdx = oldCourse.findIndex(
            course => course.course_id === newCourse.course_id
          ); //locate the update course by id and return the index of course object
          console.log(courseIdx);
          oldCourse[courseIdx] = newCourse;
          return oldCourse;
        });
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to update course by id ${newCourse.course_id}`,
      });
    }
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
            <CourseItem
              key={course.course_id}
              course={course}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>

      <div className="block-container">
        <AddCourse handleAddCourse={handleAddCourse} />
        <SearchCourse />
      </div>
    </div>
  );
}

export default Course;
