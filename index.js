const express = require("express");
// import your mongoose
const mongoose = require("mogoose");
// install your mongoose

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// create a studentSchema with name, grade, advisory, and fav subject
const studentSchema = new mongoose.studentSchema({
  name: {type: String, require: true},
  grade: {type: Number, default: 9},
  favSub: {type: String}
})
// connect your schema to a model called Student
const Student = mongoose.Model("Student", studentSchema, "Students")
// create a route hanlder for /g12 that returns every student in grade 12

// (OYO) create a route hanlder for /me that returns yourself without using your name in the query

// (OYO) create a route hanlder for /friend that returns someone at your table using their name in the query

// Write an async function called startServer
// inside make sure to connect to mongoose w/ your SRV string
// (make sure your call you name your database myClass!)
// Save a document to mongoDB about yourself 
// (OYO) save 2 more documents about students at your table
// make sure to start your server 

async function startServer() {
  await mongoose.connect("mongodb+srv://akoladeajibola25:<db_password>@akdoingse12.4hcgu.mongodb.net/?retryWrites=true&w=majority&appName=akdoingse12"  

    const me = await new Student()
  )}

// call startServer

// if you finished all the excersizes try these 
