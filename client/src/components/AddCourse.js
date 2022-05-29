import React from "react";
import { useState, useEffect } from "react";

function AddCourse({ handleAddCourse }) {
  //formData is an object with propeties being deptId, courseName, courseCredit
  //const formData = {deptId: '', courseName: "", courseCredit: "",}
  const [formData, setFormData] = useState({
    courseName: "",
    courseCredit: "",
  });

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      //object format => [key]: value
      [event.target.name]: event.target.value,
    }));
  };

  const insertCourse = async (event) => {
    event.preventDefault();
    //formData is an object
    const newCourse = formData;

    try {
      const response = await fetch("http://localhost:3000/course", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });
      if (response.status === 201) {
        alert("Successfully added course");
        handleAddCourse(await response.json());
        //console.log(await response.json());
      }
    } catch (err) {
      console.error({ Success: "Falied to send request from client" });
    }
  };

  return (
    <div className="block-1">
      <h4>Adding Course</h4>
      <form onSubmit={insertCourse}>
        <input
          type="text"
          placeholder="Enter Course Name"
          name="courseName"
          value={formData.courseName}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="courseCredit"
          placeholder="Enter Course Credit"
          value={formData.courseCredit}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddCourse;
