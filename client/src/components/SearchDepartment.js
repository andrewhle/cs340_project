import React from "react";
import FilterDepartment from "./FilterDepartment";

const SearchDepartment = () => {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  //Whenever we set a new value in the form, it will be store in value
  const [value, setValue] = React.useState({
    dept_id: "",
    dept_name: "",
    location: "",
    campus: "",
  });

  const [data, setData] = React.useState([]);

  const handleClick = async event => {
    //call api
    event.preventDefault();
    const urlParams = new URLSearchParams(value);
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/department?${urlParams.toString()}`,
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
      <h4>Search Department</h4>
      <form onSubmit={handleClick}>
        <input
          type="text"
          name="dept_id"
          placeholder="Enter Department Id"
          onChange={handleChange}
          value={value.dept_id}
        ></input>
        <input
          type="text"
          name="dept_name"
          placeholder="Enter Department Name"
          onChange={handleChange}
          value={value.dept_name}
        ></input>
        <input
          type="text"
          name="location"
          placeholder="Enter Department Location"
          onChange={handleChange}
          value={value.location}
        ></input>
        <input
          type="text"
          name="campus"
          placeholder="Enter Department Campus"
          onChange={handleChange}
          value={value.campus}
        ></input>
        <button type="submit">Search</button>
      </form>
      {isShow ? <FilterDepartment data={data} onClose={setShow} /> : null}
    </div>
  );
};

export default SearchDepartment;
