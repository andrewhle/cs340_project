import React from "react";

const FilterMajor = ({ onClose, data }) => {
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
                <th>Major Id</th>
                <th>Department Id</th>
                <th>Major Name</th>
                <th>Major Credit require</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr key={item.major_id}>
                  <td>{item.major_id}</td>
                  <td>{item.dept_id}</td>
                  <td>{item.major_name}</td>
                  <td>{item.credit_req}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default FilterMajor;
