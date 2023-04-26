const express = require("express");
const {createTask, getTasks, getTask, deleteTask, updateTask} = require("../controllers/taskController");
const Task = require("../models/TaskModel");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router; 
