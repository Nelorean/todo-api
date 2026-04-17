const express = require('express')
const router = express.Router()
const {getAllTasks, createTask,updateTask, deleteTask} = require('../controllers/taskControllres')
const authMiddleware = require('../middlewares/authMiddleware')

router.use(authMiddleware)

router.get('/',getAllTasks)
router.post('/',createTask)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router