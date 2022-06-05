import React from "react";
import FilterMajor from "./FilterMajor";

function SearchMajor() {
  const [isShow, setShow] = React.useReducer(state => !state, false);
  //Whenever we set a new value in the form, it will be store in value
  const [value, setValue] = React.useState({
    major_id: "",
    major_name: "",
    credit_req: "",
  });

  const [data, setData] = React.useState([]);

  const handleClick = async event => {
    //call api
    event.preventDefault();
    const urlParams = new URLSearchParams(value);
    try {
      const response = await fetch(
        `https://gravityfalluniversity.herokuapp.com/major?${urlParams.toString()}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      //load data receive to setState
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
      <h4>Search Major</h4>
      <form onSubmit={handleClick}>
        <input
          type="number"
          name="major_id"
          placeholder="Enter Major Id"
          onChange={handleChange}
          value={value.major_id}
        ></input>
        <input
          type="text"
          name="major_name"
          placeholder="Enter Major Name"
          onChange={handleChange}
          value={value.major_name}
        ></input>
        <input
          type="number"
          name="credit_req"
          placeholder="Enter Major Credit Require"
          onChange={handleChange}
          value={value.credit_req}
        ></input>
        <button type="submit">Search</button>
      </form>
      {isShow ? <FilterMajor data={data} onClose={setShow} /> : null}
    </div>
  );
}

export default SearchMajor;
