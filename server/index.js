const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

//--------------------------DATA BASE CONNECTION------------------------------

const pool = mysql.createConnection({
  host: "classmysql.engr.oregonstate.edu",
  user: "cs340_lehung",
  password: "933956527",
  database: "cs340_lehung",
});

pool.connect((err) => {
  if (!err) {
    console.log("Connect with mysql");
  } else {
    console.log("Failed to connect to mysql");
  }
});

//------------------------ROUTE HANDLER-------------------------------------------

//------------------MYSQL COMMAND------------------

//---------------------------------------------

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8000",
  })
);

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
      req.send({ Success: false, message: "Failed to retrieve course" });
    }
  });
});

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

app.listen(3000, () => console.log("Server listen to port 3000"));
