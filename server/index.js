const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = 3000;

//--------------------------DATA BASE CONNECTION------------------------------

const pool = mysql.createConnection({
  host: `${process.env.HOST}`,
  user: `${process.env.USER}`,
  password: `${process.env.PASSWORD}`,
  database: `${process.env.DATABASE}`,
});

pool.connect(err => {
  if (!err) {
    console.log("Successfully connect to mysql");
  } else {
    console.log("Failed to connect to mysql");
  }
});

//------------------------ROUTE HANDLER-------------------------------------------

//------------------MYSQL COMMAND------------------

//---------------------------------------------

app.use(cors());
app.options("*", cors());
app.use(express.json());

//---------------------------------------COURSE------------------------
app.post("/course", (req, res) => {
  const course_name = req.body.courseName;
  const course_credit = req.body.courseCredit;

  const sql = `INSERT INTO course (course_name, course_credit) values ("${course_name}", ${course_credit});`;
  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(201).json({
        course_id: result.insertId,
        course_name,
        course_credit,
      });
    } else {
      res.send({ Success: false, message: "Failed to create course request" });
    }
  });
});

app.get("/course", (req, res) => {
  const sql = "SELECT * FROM course;";

  pool.query(sql, (err, result) => {
    if (!err) {
      res.json(result);
    } else {
      res.send({ Success: false, message: "Failed to retrieve course" });
    }
  });
});

app.delete("/course/:course_id", (req, res) => {});

//------------------------------STUDENT---------------------------------

app.post("/student", (req, res) => {
  const dept_id = req.body.deptId;
  const first_name = req.body.firstName;
  const last_name = req.body.lastName;
  const email = req.body.email;
  const date_of_birth = req.body.dateOfBirth;

  const sql = `INSERT INTO student (dept_id, first_name, last_name, email, date_of_birth) values (${dept_id}, "${first_name}", "${last_name}", "${email}", "${date_of_birth}");`;
  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(201).json({
        student_id: result.insertId,
        dept_id,
        first_name,
        last_name,
        email,
        date_of_birth,
      });
    } else {
      res.send({ Success: false, message: "Failed to create student request" });
    }
  });
});

app.get("/student", (req, res) => {
  pool.query("SELECT * FROM student;", (err, rows, field) => {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  });
});

//----------------------------COURSE_STUDENT-------------------------

app.get("/course_student", (req, res) => {
  pool.query("SELECT * FROM course_student;", (err, rows, field) => {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  });
});

//--------------------------DEPARTMENT-------------------------------

app.get("/department", (req, res) => {
  pool.query("SELECT * FROM department;", (err, rows, field) => {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  });
});

//----------------------------MAJOR----------------------------------

app.get("/major", (req, res) => {
  pool.query("SELECT * FROM major;", (err, rows, field) => {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  });
});

//-----------------------------TEACHER-------------------------------

app.get("/teacher", (req, res) => {
  pool.query("SELECT * FROM teacher;", (err, rows, field) => {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  });
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server listen to port ${PORT}`)
);
