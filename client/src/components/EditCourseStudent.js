import React from "react";

const EditCourseStudent = ({ CourseStudent, onClose, handleEdit }) => {
  const [value, setValue] = React.useState(CourseStudent);

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
            <div className="edit-input-group">
              <label className="edit-label" htmlFor="course_student_id">
                Id
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="course_student_id"
                type="text"
                value={value.course_student_id}
                readOnly
              />
            </div>
            <div className="edit-input-group">
              <label className="edit-label" htmlFor="course_id">
                Course Id
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="course_id"
                type="number"
                value={value.course_id}
              />
            </div>
            <div className="edit-input-group">
              <label className="edit-label" htmlFor="student_id">
                Student Id
              </label>
              <input
                className="edit-input"
                onChange={handleChange}
                name="student_id"
                type="number"
                value={value.student_id}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditCourseStudent;
