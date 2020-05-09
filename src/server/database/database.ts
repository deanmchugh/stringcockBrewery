import Mongoose from 'mongoose'
import {UserModel} from '../models/user/user.model'
import env from '../../../env.config'

let database: Mongoose.Connection

export const connect = () => {
    const mongoDB = `mongodb+srv://dmchugh:${env.DB_PASS}@mchughcluster-94rst.mongodb.net/${env.DB_NAME}?retryWrites=true&w=majority`

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

    return {
        UserModel
    }
}

export const disconnect = () => {
    if (!database) {
        return 
    }
    Mongoose.disconnect()
}