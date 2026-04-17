const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const taskRoutes = require ('./routes/taskRoutes')
const authRoutes = require ('./routes/authRoutes')

const app = express()

app.use(express.json());

app.use('/tasks',taskRoutes)
app.use('/auth', authRoutes)

mongoose.connect(process.env.MONGODB_URL)
  .then(()=> console.log('MongoDB Conectado'))
  .catch((err)=> console.error('Erro ao Conectar',err))

module.exports = app;