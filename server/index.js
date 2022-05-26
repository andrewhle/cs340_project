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

pool.connect(err => {
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

app.post("/course", (req, res) => {
  const dept_id = req.body.deptId;
  const course_name = req.body.courseName;
  const course_credit = req.body.courseCredit;

  const sql = `INSERT INTO course (dept_id, course_name, course_credit) values (${dept_id}, "${course_name}", ${course_credit});`;
  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(201).json({
        course_id: result.insertId,
        dept_id,
        course_name,
        course_credit,
      });
    } else {
      res.send({ Success: false, message: "Failed to create course" });
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
