import React from "react";
import { useState, useEffect } from "react";

const AddCourseStudent = ({ handleAddCourseStudent }) => {
  const [formData, setFormData] = useState({
    course_id: "",
    student_id: "",
  });

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      //object format => [key]: value
      [event.target.name]: event.target.value,
    }));
  };
  const insertCourseStudent = async event => {
    event.preventDefault();
    //formData is an object
    const newCourseStudent = formData;

    try {
      const response = await fetch(
        "https://gravityfalluniversity.herokuapp.com/course_student",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCourseStudent),
        }
      );
      if (response.status === 201) {
        alert("Successfully added Course_Student");
        handleAddCourseStudent(await response.json());
        //console.log(await response.json());
      }
    } catch (err) {
      console.error({ Success: "Falied to send request from client" });
    }
  };

  return (
    <div className="block-1">
      <h4>Adding Course_Student</h4>
      <form onSubmit={insertCourseStudent}>
        <input
          type="number"
          placeholder="Enter Course Id"
          name="course_id"
          value={formData.course_id}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="student_id"
          placeholder="Enter Student Id"
          value={formData.student_id}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddCourseStudent;
