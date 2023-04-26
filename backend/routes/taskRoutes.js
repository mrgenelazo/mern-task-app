const express = require("express");
const {createTask, getTasks} = require("../controllers/taskController");
const Task = require("../models/TaskModel");

const router = express.Router();


//Create Task
router.post("/api/tasks", createTask);

//Get/Read Tasks
router.get("/api/tasks", getTasks)

module.exports = router; 
