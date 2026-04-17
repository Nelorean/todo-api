const Task = require('../models/Task')

const getAllTasks = async(req,res) =>{
  try{
    const tasks = await Task.find()
    res.json(tasks)
  } catch(error){
    res.status(500).json({message: 'Erro ao buscar tarefas'})
  }
}
const createTask = async (req,res) =>{
  try {
    const {title,description} = req.body
    const task = await Task.create({title,description})
    res.status(201).json(task)
  } catch (error) {
    res.status(400).json({message: 'Erro ao criar tarefa'})    
  }
}

const updateTask = async (req,res) =>{
  try {
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if (!task) return res.status(404).json({message: 'Tarefa não encontrada'})
    res.json(task)
  } catch (error) {
    res.status(400).json({message:'Erro ao atualizar tarefa'})
  }
}

const deleteTask = async (req,res) =>{
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message: 'Tarefa não encontrada'})
    res.json({message:'Tarefa deletada com sucesso'})
    } catch (error) {
      res.status(500).json({message: 'Erro ao deletar tarefa'})
  }
}

module.exports = {getAllTasks,createTask,updateTask,deleteTask}