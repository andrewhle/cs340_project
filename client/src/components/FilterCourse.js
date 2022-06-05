import React from "react";

const FilterCourse = ({ onClose, data }) => {
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
          <>Not found</>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Course Id</th>
                <th>Course Name</th>
                <th>Course Credit</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.course_id}>
                  <td>{item.course_id}</td>
                  <td>{item.course_name}</td>
                  <td>{item.course_credit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default FilterCourse;
