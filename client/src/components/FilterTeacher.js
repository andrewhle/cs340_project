import React from "react";

const FilterTeacher = ({ onClose, data }) => {
  const isEmpty = data.length === 0;
  return (
    <>
      <div className="edit-background" onClick={onClose}></div>
      <div className="edit-form-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {/* if data not found, return Not Found, if isEmpty is false, render table with data */}
        {isEmpty ? (
          <div>Not found</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Teacher Id</th>
                <th>Department Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date Of Birth</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.teacher_id}>
                  <td>{item.teacher_id}</td>
                  <td>{item.dept_id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    {new Date(item.date_of_birth).toISOString().slice(0, 10)}
                  </td>
                  <td>{item.phone_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default FilterTeacher;
