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

app.put("/course/:course_id", (req, res) => {
  const course_id = req.params.course_id;
  const course_name = req.body.course_name;
  const course_credit = req.body.course_credit;

  console.log(course_id);

  const sql = `UPDATE course SET course_name = "${course_name}", course_credit = ${course_credit} WHERE course_id = ${course_id};`;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.json({
        Success: true,
        message: `Number of rows updated = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to update course" });
    }
  });
});

app.delete("/course/:course_id", (req, res) => {
  const course_id = req.params.course_id;

  const sql = `DELETE FROM course WHERE course_id = ${course_id}`;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(200).json({
        Success: true,
        message: `Number of rows delete = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to delete course" });
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
  pool.query("SELECT * FROM student;", (err, rows) => {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  });
});

app.put("/student/:student_id", (req, res) => {
  const student_id = req.params.student_id;
  const dept_id = req.body.dept_id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const date_of_birth = req.body.date_of_birth;

  console.log(student_id);

  const sql = `UPDATE student SET dept_id = ${dept_id}, first_name = "${first_name}", last_name = "${last_name}", email = "${email}", date_of_birth = "${date_of_birth}" WHERE student_id = ${student_id}; `;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.json({
        Success: true,
        message: `Number of rows updated = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to update student" });
    }
  });
});

app.delete("/student/:student_id", (req, res) => {
  const student_id = req.params.student_id;

  const sql = `DELETE FROM student WHERE student_id = ${student_id}`;

  pool.query(sql, (err, result) => {
    console.log("Getting here");
    if (!err) {
      res.status(200).json({
        Success: true,
        message: `Number of rows delete = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to delete student" });
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

app.post("/major", (req, res) => {
  const dept_id = req.body.deptId;
  const major_name = req.body.majorName;
  const credit_req = req.body.creditReq;

  const sql = `INSERT INTO major (dept_id, major_name, credit_req) values (${dept_id}, "${major_name}", ${credit_req});`;
  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(201).json({
        major_id: result.insertId,
        dept_id,
        major_name,
        credit_req,
      });
    } else {
      res.send({ Success: false, message: "Failed to create course request" });
    }
  });
});

app.get("/major", (req, res) => {
  pool.query("SELECT * FROM major;", (err, rows, field) => {
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  });
});

app.put("/major/:major_id", (req, res) => {
  const major_id = req.params.major_id;
  const dept_id = req.body.dept_id;
  const major_name = req.body.major_name;
  const credit_req = req.body.credit_req;

  console.log(major_id);

  const sql = `UPDATE major SET dept_id = ${dept_id}, major_name = "${major_name}", credit_req = ${credit_req} WHERE major_id = ${major_id};`;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.json({
        Success: true,
        message: `Number of rows updated = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to update major" });
    }
  });
});

app.delete("/major/:major_id", (req, res) => {
  const major_id = req.params.major_id;

  const sql = `DELETE FROM major WHERE major_id = ${major_id}`;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(200).json({
        Success: true,
        message: `Number of rows delete = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to delete major" });
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
