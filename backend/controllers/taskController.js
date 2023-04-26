const Task = require("../models/TaskModel");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message})      
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).json( `No task with id: ${id}`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

//Delete Task
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`);
        }
        res.status(200).send("Task successfully deleted");
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

//pdates task
const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate({_id: id}, 
            req.body, {
                new: true,
                runValidators: true,
            });
        if(!task) {
           return res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}