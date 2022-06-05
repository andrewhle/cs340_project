import React from "react";
import { useState, useEffect } from "react";

function AddTeacher({ handleAddTeacher }) {
  const [formData, setFormData] = useState({
    deptId: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
  });

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      //object format => [key]: value
      [event.target.name]: event.target.value,
    }));
  };

  const insertTeacher = async event => {
    event.preventDefault();
    //formData is an object
    const newTeacher = formData;

    try {
      const response = await fetch(
        "https://gravityfalluniversity.herokuapp.com/teacher",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTeacher),
        }
      );
      if (response.status === 201) {
        alert("Successfully added teacher");
        handleAddTeacher(await response.json());
        //console.log(await response.json());
      }
    } catch (err) {
      console.error({ Success: "Falied to send request from client" });
    }
  };

  return (
    <div className="block-1">
      <h4>Adding Teacher</h4>
      <form onSubmit={insertTeacher}>
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
          name="dateOfBirth"
          placeholder="Enter Date Of Birth in format (yyyy-mm-dd)"
          value={formData.dateOfBirth}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTeacher;
