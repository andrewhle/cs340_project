import React from "react";

const EditMajorForm = ({ major, onClose, handleEdit }) => {
  const [value, setValue] = React.useState(major);

  const handleChange = event => {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    // call edit api, if the request is successful, execute handleEdit

    handleEdit(value);
    onClose();

    event.preventDefault();
  };
  return (
    <>
      <div className="edit-background" onClick={onClose}></div>
      <div className="edit-form-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form className="edit-form" onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: 16 }}>
            <div>
              <label className="edit-label" htmlFor="major_id">
                Major Id
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="major_id"
                type="text"
                value={value.major_id}
                readOnly
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="dept_id">
                Department Id
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="dept_id"
                type="text"
                value={value.dept_id}
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="major_name">
                Major Name
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="major_name"
                type="text"
                value={value.major_name}
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="credit_req">
                Credit Requirement
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="credit_req"
                type="text"
                value={value.credit_req}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditMajorForm;
