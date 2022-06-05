import React from "react";
import { useState, useEffect } from "react";

function AddStudent({ handleAddStudent }) {
  const [formData, setFormData] = useState({
    deptId: "",
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
  });

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      //object format => [key]: value
      [event.target.name]: event.target.value,
    }));
  };

  const insertStudent = async event => {
    event.preventDefault();
    //formData is an object
    const newStudent = formData;

    try {
      const response = await fetch(
        "https://gravityfalluniversity.herokuapp.com/student",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        }
      );
      if (response.status === 201) {
        alert("Successfully added student");
        handleAddStudent(await response.json());
        //console.log(await response.json());
      }
    } catch (err) {
      console.error({ Success: "Falied to send request from client" });
    }
  };

  return (
    <div className="block-1">
      <h4>Adding Student</h4>
      <form onSubmit={insertStudent}>
        <input
          type="number"
          name="deptId"
          placeholder="Enter Department id"
          value={formData.deptId}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="dateOfBirth"
          placeholder="Enter Date Of Birth in format (yyyy-mm-dd)"
          value={formData.dateOfBirth}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
