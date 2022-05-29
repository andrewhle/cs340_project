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

  const handleChange = (event) => {};

  return (
    <div className="block-1">
      <h4>Adding Student</h4>
      <form>
        <input
          type="number"
          name="deptId"
          placeholder="Enter Department id"
          value={formData.deptId}
          onChage={handleChange}
        ></input>
        <input
          type="test"
          name="firstName"
          placeholder="Enter First Name"
          value={formData.firstName}
          onChage={handleChange}
        ></input>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          value={formData.lastName}
          onChage={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChage={handleChange}
        ></input>
        <input
          type="text"
          name="dateOfBirth"
          placeholder="Enter Date Of Birth"
          value={formData.dateOfBirth}
          onChage={handleChange}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
