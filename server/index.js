const express = require("express");
const app = express();
const mysql = require("mysql");

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

app.get("/student", (req, res) => {
  pool.query("SELECT * FROM student;", (err, rows, field) => {
    if (!err) {
      console.log(rows[0]);
      res.send(JSON.stringify(rows));
    } else {
      console.log(err);
    }
  });
});

app.listen(3000, () => console.log("Server listen to port 3000"));
