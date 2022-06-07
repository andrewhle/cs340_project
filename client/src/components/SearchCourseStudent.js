import React from "react";
import FilterCourseStudent from "./FilterCourseStudent";

const SearchCourseStudent = () => {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  //Whenever we set a new value in the form, it will be store in value
  const [value, setValue] = React.useState({
    course_student_id: "",
    course_id: "",
    student_id: "",
  });

  const [data, setData] = React.useState([]);

  const handleClick = async event => {
    //call api
    event.preventDefault();
    const urlParams = new URLSearchParams(value);
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/course_student?${urlParams.toString()}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error({
        Success: false,
        Error: `Failed to request from client`,
      });
    }
    setShow();
  };

  //Whenever there change detect from the form, React will load a new value
  function handleChange(event) {
    setValue(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div className="block-2">
      <h4>Search Course_Student</h4>
      <form onSubmit={handleClick}>
        <input
          type="number"
          name="course_student_id"
          placeholder="Enter Course Student Id"
          onChange={handleChange}
          value={value.course_student_id}
        ></input>
        <input
          type="number"
          name="course_id"
          placeholder="Enter Course Id"
          onChange={handleChange}
          value={value.course_id}
        ></input>
        <input
          type="number"
          name="student_id"
          placeholder="Enter Student Id"
          onChange={handleChange}
          value={value.student_id}
        ></input>
        <button type="submit">Search</button>
      </form>
      {isShow ? <FilterCourseStudent data={data} onClose={setShow} /> : null}
    </div>
  );
};

export default SearchCourseStudent;
