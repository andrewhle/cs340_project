import React from "react";
import logo2 from "../images/dipper.png";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <img className="logo" src={logo2} />
        <ul className="navbar">
          <Link to="/" className="link">
            HomePage
          </Link>
          <Link to="/course" className="link">
            Course
          </Link>
          <Link to="/department" className="link">
            Department
          </Link>
          <Link to="/major" className="link">
            Major
          </Link>
          <Link to="/student" className="link">
            Student
          </Link>
          <Link to="/teacher" className="link">
            Teacher
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
