import React from "react";

const EditStudentForm = ({ student, onClose, handleEdit }) => {
  const [value, setValue] = React.useState(student);

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
              <label className="edit-label" htmlFor="student_id">
                Student Id
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="student_id"
                type="text"
                value={value.student_id}
                readOnly
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="dept_id">
                Deparment Id
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
              <label className="edit-label" htmlFor="first_name">
                First Name
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="first_name"
                type="text"
                value={value.first_name}
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="last_name">
                Last Name
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="last_name"
                type="text"
                value={value.last_name}
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="email">
                Email
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="email"
                type="text"
                value={value.email}
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="date_of_birth">
                Date Of Birth
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="date_of_birth"
                type="text"
                value={value.date_of_birth}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditStudentForm;
