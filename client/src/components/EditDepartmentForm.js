import React from "react";

const EditDepartmentForm = ({ department, onClose, handleEdit }) => {
  const [value, setValue] = React.useState(department);

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
              <label className="edit-label" htmlFor="dept_id">
                Department Id
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="dept_id"
                type="text"
                value={value.dept_id}
                readOnly
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="dept_name">
                Department Name
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="dept_name"
                type="text"
                value={value.dept_name}
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="location">
                Location
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="location"
                type="text"
                value={value.location}
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="campus">
                Campus
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="campus"
                type="text"
                value={value.campus}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditDepartmentForm;
