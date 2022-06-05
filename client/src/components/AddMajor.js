import React from "react";
import { useState, useEffect } from "react";

function AddMajor({ handleAddMajor }) {
  //formData is an object with propeties being deptId, courseName, courseCredit
  //const formData = {deptId: '', courseName: "", courseCredit: "",}
  const [formData, setFormData] = useState({
    deptId: "",
    majorName: "",
    creditReq: "",
  });

  const handleChange = event => {
    setFormData(prevState => ({
      ...prevState,
      //object format => [key]: value
      [event.target.name]: event.target.value,
    }));
  };

  const insertMajor = async event => {
    event.preventDefault();
    //formData is an object
    const newMajor = formData;

    try {
      const response = await fetch(
        "https://gravityfalluniversity.herokuapp.com/major",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMajor),
        }
      );
      if (response.status === 201) {
        alert("Successfully added major");
        handleAddMajor(await response.json());
        //console.log(await response.json());
      }
    } catch (err) {
      console.error({ Success: "Falied to send request from client" });
    }
  };

  return (
    <div className="block-1">
      <h4>Adding Major</h4>
      <form onSubmit={insertMajor}>
        <input
          type="number"
          name="deptId"
          placeholder="Enter Department Id"
          value={formData.deptId}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Enter Major Name"
          name="majorName"
          value={formData.majorName}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="creditReq"
          placeholder="Enter Major Credit Requirement"
          value={formData.creditReq}
          onChange={handleChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddMajor;
