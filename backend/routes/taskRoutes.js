const express = require("express");
const {createTask, getTasks, getTask} = require("../controllers/taskController");
const Task = require("../models/TaskModel");

const router = express.Router();



router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);

module.exports = router; 
