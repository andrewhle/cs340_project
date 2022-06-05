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
    console.log(err);
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
  // (Object.keys(req.query) => ['course_id', 'course_name', 'course_credit'].every(key => req.query[key]  )
  if (Object.keys(req.query).every(key => req.query[key] === "")) {
    const sql = "SELECT * FROM course;";
    pool.query(sql, (err, result) => {
      if (!err) {
        res.json(result);
      } else {
        res.send({ Success: false, message: "Failed to retrieve course" });
      }
    });
    //else return filter row
  } else {
    const sql = `SELECT * FROM course WHERE course_id = "${req.query.course_id}" OR course_name = "${req.query.course_name}" OR course_credit = "${req.query.course_credit}";`;
    pool.query(sql, (err, result) => {
      if (!err) {
        res.json(result);
      } else {
        res.send({ Success: false, message: "Failed to retrieve course" });
      }
    });
  }
});

app.put("/course/:course_id", (req, res) => {
  const course_id = req.params.course_id;
  const course_name = req.body.course_name;
  const course_credit = req.body.course_credit;

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
  //if req.query empty, return the whole table to fetch data
  if (Object.keys(req.query).every(key => req.query[key] === "")) {
    pool.query("SELECT * FROM student;", (err, rows) => {
      if (!err) {
        res.send(JSON.stringify(rows));
      } else {
        console.log(err);
      }
    });
    //else return filter row
  } else {
    const sql = `SELECT * FROM student WHERE student_id = "${req.query.student_id}" OR first_name = "${req.query.first_name}" OR last_name = "${req.query.last_name}";`;
    pool.query(sql, (err, result) => {
      if (!err) {
        res.json(result);
      } else {
        res.send({ Success: false, message: "Failed to retrieve student" });
      }
    });
  }
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

app.post("/department", (req, res) => {
  const dept_name = req.body.deptName;
  const location = req.body.location;
  const campus = req.body.campus;

  const sql = `INSERT INTO department (dept_name, location, campus) values ("${dept_name}", "${location}", "${campus}");`;
  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(201).json({
        dept_id: result.insertId,
        dept_name,
        location,
        campus,
      });
    } else {
      res.send({
        Success: false,
        message: "Failed to create department request",
      });
    }
  });
});

app.get("/department", (req, res) => {
  //if req.query empty, return the whole table to fetch data
  if (Object.keys(req.query).every(key => req.query[key] === "")) {
    pool.query("SELECT * FROM department;", (err, rows, field) => {
      if (!err) {
        res.send(JSON.stringify(rows));
      } else {
        console.log(err);
      }
    });
  } else {
    const sql = `SELECT * FROM department WHERE dept_id = "${req.query.dept_id}" OR dept_name = "${req.query.dept_name}" OR campus = "${req.query.campus}";`;
    pool.query(sql, (err, result) => {
      if (!err) {
        res.json(result);
      } else {
        res.send({ Success: false, message: "Failed to retrieve department" });
      }
    });
  }
});

app.put("/department/:dept_id", (req, res) => {
  const dept_id = req.params.dept_id;
  const dept_name = req.body.dept_name;
  const location = req.body.location;
  const campus = req.body.campus;

  const sql = `UPDATE department SET dept_name = "${dept_name}", location = "${location}", campus = "${campus}" WHERE dept_id = ${dept_id}; `;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.json({
        Success: true,
        message: `Number of rows updated = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to update department" });
    }
  });
});

app.delete("/department/:dept_id", (req, res) => {
  const dept_id = req.params.dept_id;

  const sql = `DELETE FROM department WHERE dept_id = ${dept_id}`;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(200).json({
        Success: true,
        message: `Number of rows delete = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to delete department" });
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
  //if req.query empty, return the whole table to fetch data
  if (Object.keys(req.query).every(key => req.query[key] === "")) {
    pool.query("SELECT * FROM major;", (err, rows, field) => {
      if (!err) {
        res.send(JSON.stringify(rows));
      } else {
        console.log(err);
      }
    });
  } else {
    const sql = `SELECT * FROM major WHERE major_id = "${req.query.major_id}" OR major_name = "${req.query.major_name}" OR credit_req = "${req.query.credit_req}";`;
    pool.query(sql, (err, result) => {
      if (!err) {
        res.json(result);
      } else {
        res.send({ Success: false, message: "Failed to retrieve major" });
      }
    });
  }
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

app.post("/teacher", (req, res) => {
  const dept_id = req.body.deptId;
  const first_name = req.body.firstName;
  const last_name = req.body.lastName;
  const date_of_birth = req.body.dateOfBirth;
  const phone_number = req.body.phoneNumber;

  const sql = `INSERT INTO teacher (dept_id, first_name, last_name, date_of_birth, phone_number) values (${dept_id}, "${first_name}", "${last_name}", "${date_of_birth}", "${phone_number}");`;
  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(201).json({
        teachert_id: result.insertId,
        dept_id,
        first_name,
        last_name,
        date_of_birth,
        phone_number,
      });
    } else {
      res.send({ Success: false, message: "Failed to create student request" });
    }
  });
});

app.get("/teacher", (req, res) => {
  //if req.query empty, return the whole table to fetch data
  if (Object.keys(req.query).every(key => req.query[key] === "")) {
    pool.query("SELECT * FROM teacher;", (err, rows, field) => {
      if (!err) {
        res.send(JSON.stringify(rows));
      } else {
        console.log(err);
      }
    });
  } else {
    const sql = `SELECT * FROM teacher WHERE teacher_id = "${req.query.teacher_id}" OR first_name = "${req.query.first_name}" OR last_name = "${req.query.last_name}";`;
    pool.query(sql, (err, result) => {
      if (!err) {
        res.json(result);
      } else {
        res.send({ Success: false, message: "Failed to retrieve teacher" });
      }
    });
  }
});

app.delete("/teacher/:teacher_id", (req, res) => {
  const teacher_id = req.params.teacher_id;

  const sql = `DELETE FROM teacher WHERE teacher_id = ${teacher_id}`;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.status(200).json({
        Success: true,
        message: `Number of rows delete = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to delete teacher" });
    }
  });
});

app.put("/teacher/:teacher_id", (req, res) => {
  const teacher_id = req.params.teacher_id;
  const dept_id = req.body.dept_id;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const date_of_birth = req.body.date_of_birth;
  const phone_number = req.body.phone_number;

  const sql = `UPDATE teacher SET dept_id = ${dept_id}, first_name = "${first_name}", last_name = "${last_name}", date_of_birth = "${date_of_birth}", phone_number = "${phone_number}" WHERE teacher_id = ${teacher_id}; `;

  pool.query(sql, (err, result) => {
    if (!err) {
      res.json({
        Success: true,
        message: `Number of rows updated = ${result.affectedRows}`,
      });
    } else {
      res.send({ Success: false, message: "Failed to update teacher" });
    }
  });
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server listen to port ${PORT}`)
);
