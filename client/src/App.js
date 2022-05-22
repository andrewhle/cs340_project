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
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>
          <Navigation />
        </header>

        <main className="App-body">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/student" element={<Student />} />
            <Route path="/department" element={<Department />} />
            <Route path="/course" element={<Course />} />
            <Route path="/major" element={<Major />} />
            <Route path="/teacher" element={<Teacher />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
