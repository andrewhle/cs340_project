import React from "react";
import FilterTeacher from "./FilterTeacher";

function SearchTeacher() {
  //set iShow to either true or false to display the pop up
  const [isShow, setShow] = React.useReducer(state => !state, false);
  //Whenever we set a new value in the form, it will be store in value
  const [value, setValue] = React.useState({
    teacher_id: "",
    first_name: "",
    last_name: "",
  });

  const [data, setData] = React.useState([]);

  const handleClick = async event => {
    //call api
    event.preventDefault();
    const urlParams = new URLSearchParams(value);
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/teacher?${urlParams.toString()}`,
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

    //setState to pop up a table
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
      <h4>Search Teacher</h4>
      <form onSubmit={handleClick}>
        <input
          type="number"
          name="teacher_id"
          placeholder="Enter Teacher Id"
          onChange={handleChange}
          value={value.teacher_id}
        ></input>
        <input
          type="text"
          name="first_name"
          placeholder="Enter First Name"
          onChange={handleChange}
          value={value.first_name}
        ></input>
        <input
          type="text"
          name="last_name"
          placeholder="Enter First Name"
          onChange={handleChange}
          value={value.last_name}
        ></input>
        <button type="submit">Search</button>
      </form>
      {isShow ? <FilterTeacher data={data} onClose={setShow} /> : null}
    </div>
  );
}

export default SearchTeacher;
