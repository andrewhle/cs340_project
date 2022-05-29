import React from "react";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import AddMajor from "../components/AddMajor";
import SearchMajor from "../components/SearchMajor";

function Major() {
  const [major, setMajor] = useState([]);

  const loadMajor = function () {
    fetch(`/major`)
      .then(res => res.json())
      .then(data => setMajor(data));
  };

  useEffect(() => loadMajor(), []);
  return (
    <div>
      <h2>Major Page</h2>
      <table>
        <thead>
          <tr>
            <th>Major id</th>
            <th>Department id (FK)</th>
            <th>Major Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {major.map(major => (
            <tr key={major.major_id}>
              <td>{major.dept_id}</td>
              <td>{major.major_name}</td>
              <td>{major.credit_req}</td>
              <td>
                <MdEdit />
              </td>
              <td>
                <MdDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="block-container">
        <AddMajor />
        <SearchMajor />
      </div>
    </div>
  );
}

export default Major;
