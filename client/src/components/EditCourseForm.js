import React from "react";

const EditCourseForm = ({ course, onClose, handleEdit }) => {
  const [value, setValue] = React.useState(course);

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
              <label className="edit-label" htmlFor="course_id">
                Course Id
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="course_id"
                type="text"
                value={value.course_id}
                readOnly
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="course_name">
                Course Name
              </label>
              <input
                className="edit-input"
                id="course_name"
                onChange={handleChange}
                name="course_name"
                type="text"
                value={value.course_name}
              />
            </div>
            <div>
              <label className="edit-label" htmlFor="course_credit">
                Course Credit
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="course_credit"
                type="text"
                value={value.course_credit}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditCourseForm;
