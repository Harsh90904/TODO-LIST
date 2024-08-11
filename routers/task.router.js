

const { Router } = require("express")
const { getTask, findById, createTask, updateTask, deleteTask, findTaskByUserId } = require("../controllers/task.controller")

const taskRoute = Router()

taskRoute.get("/", getTask)
taskRoute.get("/:id", findById)
taskRoute.post("/", createTask)
taskRoute.patch("/:id", updateTask)
taskRoute.delete("/:id", deleteTask)
taskRoute.get("/user/:userId",findTaskByUserId)

module.exports = taskRoute
