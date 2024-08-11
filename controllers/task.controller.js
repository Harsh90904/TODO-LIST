
const Task = require("../models/todo")

const createTask = async (req, res) => {
    console.log(req.body);
    
    let data = await Task.create(req.body)
    res.send(data)
}

const getTask = async (req, res) => {
    let data = await Task.find()
    res.send(data)
}

const deleteTask = async (req, res) => {
    let { id } = req.params
    let data = await Task.findByIdAndDelete(id)
    res.send(data)
}

const updateTask = async (req, res) => {
    let { id } = req.params
    let data = await Task.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const findById=async(req, res) => {
    let { id }=req.params
    let data = await Task.findById(id)
    res.send(data)
}

const findTaskByUserId=async(req, res) => {
    let { userid } = req.params
    let data = await Task.find({ userid: userid})
    res.send(data)

}
module.exports={createTask, deleteTask, updateTask,getTask,findById,findTaskByUserId}
