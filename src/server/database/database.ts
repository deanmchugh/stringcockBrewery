require('dotenv').config()
import Mongoose from 'mongoose'
import {User} from '../models/user.model'

let database: Mongoose.Connection

export const connect = () => {
    const mongoDB = `mongodb+srv://dmchugh:${process.env.DB_PASS}@mchughcluster-94rst.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

    if (database) {
        return
    }

    Mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

    database = Mongoose.connection
    database.once('open', async () => {
        console.log('Connected to DB')
    })
    database.on('error', () => {
        console.log('Error connecting to DB')
    })
}

export const disconnect = () => {
    if (!database) {
        return 
    }
    disconnect()
}