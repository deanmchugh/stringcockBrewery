import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import {connect} from './database/database'
import env from './../env.config'

const app = express()
const port = env.PORT

app.use(helmet())
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

app.get('/', (req, res) => {
    res.send('Server started')
})