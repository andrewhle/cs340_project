import logo from "./logo.svg";
import "./App.css";

import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Student from "./pages/Student";
import Course from "./pages/Course";
import Department from "./pages/Department";
import Major from "./pages/Major";
import Teacher from "./pages/Teacher";
import CourseStudent from "./pages/CourseStudent";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App-header">
      <main className="App-body">
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/course" element={<Course />} />
            <Route path="/student" element={<Student />} />
            <Route path="/course_student" element={<CourseStudent />} />
            <Route path="/department" element={<Department />} />
            <Route path="/major" element={<Major />} />
            <Route path="/teacher" element={<Teacher />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
