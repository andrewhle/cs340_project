import React from "react";
import { useState, useEffect } from "react";

const AddDepartment = ({ handleAddDepartment }) => {
  const [formData, setFormData] = useState({
    deptName: "",
    location: "",
    campus: "",
  });

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      //object format => [key]: value
      [event.target.name]: event.target.value,
    }));
  };

  const insertDepartment = async event => {
    event.preventDefault();
    //formData is an object
    const newDepartment = formData;

    try {
      const response = await fetch(
        "https://gravityfalluniversity.herokuapp.com/department",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDepartment),
        }
      );
      if (response.status === 201) {
        alert("Successfully added department");
        handleAddDepartment(await response.json());
        //console.log(await response.json());
      }
    } catch (err) {
      console.error({ Success: "Falied to send request from client" });
    }
  };

  return (
    <div className="block-1">
      <h4>Adding Department</h4>
      <form onSubmit={insertDepartment}>
        <input
          type="text"
          placeholder="Enter Department Name"
          name="deptName"
          value={formData.deptName}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Enter Department Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Enter Department Campus"
          name="campus"
          value={formData.campus}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddDepartment;
