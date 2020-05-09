import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import {connect} from '../server/database/database'

const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(cors())
app.use(express.json())

connect()

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})