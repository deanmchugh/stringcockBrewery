require('dotenv').config()
import mongoose from 'mongoose'
import express from 'express'

const app = express()

const mongoDB = `mongodb+srv://dmchugh:${process.env.DB_PASS}@mchughcluster-94rst.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(mongoDB, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))