import React from "react";
import { useState, useEffect } from "react";
import AddMajor from "../components/AddMajor";
import SearchMajor from "../components/SearchMajor";
import MajorItem from "./MajorItem";

function Major() {
  const [major, setMajor] = useState([]);

  const handleAddMajor = major => {
    //read up about concat() in JS
    //concat merge 2 array together and return a new array contain both array
    setMajor(prevState => prevState.concat(major));
  };
  const loadMajor = function () {
    fetch(`https://gravityfalluniversity.herokuapp.com/major`)
      .then(res => res.json())
      .then(data => setMajor(data));
  };

  useEffect(() => loadMajor(), []);

  const handleEdit = async newMajor => {
    // if the request is successful, replace the old course in array with new course.
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/major/${newMajor.major_id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMajor),
        }
      );
      if (response.status === 200) {
        setMajor(prevState => {
          const oldMajor = [...prevState]; //assign every old value to a variable
          const majorIdx = oldMajor.findIndex(
            major => major.major_id === newMajor.major_id
          ); //locate the update course by id and return the index of course object
          console.log(majorIdx);
          oldMajor[majorIdx] = newMajor;
          return oldMajor;
        });
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to update course by id ${newMajor.major_id}`,
      });
    }
  };
  const handleDelete = async id => {
    // call delete api
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/major/${id}`,
        { method: "DELETE" }
      );
      // if the request is successful, set course array that doesn't contain deleted course
      if (response.status === 200) {
        setMajor(prevState => prevState.filter(major => major.major_id !== id));
      }
    } catch (err) {
      console.error({
        Success: false,
        Error: `Failed to delete major by id ${id}`,
      });
    }
  };

  return (
    <div>
      <h2>Major Page</h2>
      <table>
        <thead>
          <tr>
            <th>Major id</th>
            <th>Department id</th>
            <th>Major Name</th>
            <th>Major credit req</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {major.map(major => (
            <MajorItem
              key={major.major_id}
              major={major}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>

      <div className="block-container">
        <AddMajor handleAddMajor={handleAddMajor} />
        <SearchMajor />
      </div>
    </div>
  );
}

export default Major;
