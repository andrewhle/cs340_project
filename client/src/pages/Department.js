import React from "react";
import { useState, useEffect } from "react";
import AddDepartment from "../components/AddDepartment";
import DepartmentItem from "./DepartmentItem";
import SearchDepartment from "../components/SearchDepartment";

function Department() {
  const [department, setDepartment] = useState([]);

  const handleAddDepartment = department => {
    //read up about concat() in JS
    //concat merge 2 array together and return a new array contain both array
    setDepartment(prevState => prevState.concat(department));
  };

  const handleDelete = async id => {
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/department/${id}`,
        { method: "DELETE" }
      );
      if (response.status === 200) {
        setDepartment(prevState =>
          prevState.filter(department => department.dept_id !== id)
        );
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to delete department by id ${id}`,
      });
    }
  };

  const handleEdit = async newDepartment => {
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/department/${newDepartment.dept_id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDepartment),
        }
      );
      if (response.status === 200) {
        setDepartment(prevState => {
          const oldDepartment = [...prevState]; //assign every old value to a variable
          const DeprtmentIdx = oldDepartment.findIndex(
            department => department.dept_id === newDepartment.dept_id
          );
          console.log(DeprtmentIdx);
          oldDepartment[DeprtmentIdx] = newDepartment;
          return oldDepartment;
        });
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to update department by id ${newDepartment.dept_id}`,
      });
    }
  };

  const loadDepartment = function () {
    fetch(`https://gravityfalluniversity.herokuapp.com/department`)
      .then(res => res.json())
      .then(data => setDepartment(data));
  };

  useEffect(() => loadDepartment(), []);
  return (
    <div>
      <h2>Department Page</h2>
      <table>
        <thead>
          <tr>
            <th>Department id</th>
            <th>Department Name</th>
            <th>Location</th>
            <th>Campus</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {department.map(department => (
            <DepartmentItem
              key={department.dept_id}
              department={department}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>

      <div className="block-container">
        <AddDepartment handleAddDepartment={handleAddDepartment} />

        <SearchDepartment />
      </div>
    </div>
  );
}

export default Department;
