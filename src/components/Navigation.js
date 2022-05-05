import React from "react";
import logo2 from "../images/dipper.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <img className="logo" src={logo2} />
      <Link to="/course">Course</Link>
      <Link to="/department">Department</Link>
      <Link to="/major">Major</Link>
      <Link to="/student">Student</Link>
      <Link to="/teacher">Teacher</Link>
    </div>
  );
}

export default Navigation;
