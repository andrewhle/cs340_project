# cs340_project

## Project Name

Gravity Fall University Database Management

### Description

This is a project developing an web-application to simulate a database management system of a University. The purpose of this project is to learn about MySql
in CS 340 Introduction to Database at Oregon State University.

### How to use

After clone the repo onto local machine, open terminal for client folder and server folder to install all the packages.

`npm install`

There are a few configuration need to be change

Change the connection for MySql to your host, user, password, and database name under Index.js file. For OSU user, VPN might need in order for the connecttion
to be successfully.

There are also a MySql dump file available to initialize and created all the table in MySql.

This is the production version which might need a few change in the UI fetch() url
from "www.example.com/endpoint" to "/endpoint" on each file

Add proxy in package.json for React App to localhost machine if developing locally

`"proxy": "http://localhost:3000/",`

After that, start up the server side by

`npm start`

start up the client side folowing by the same command on terminal

if the project is not start up for some reason, contact me at

`lehung@oregonstate.edu`
