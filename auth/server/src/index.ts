import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import router from './router'

dotenv.config()

const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000

// DB Setup
const mongooseOptions = {
    dbName: 'auth',
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.set('useCreateIndex', true)
mongoose
    .connect('mongodb://root:root@localhost:27017', mongooseOptions)
    .then(() => console.log('connected DB'))
    .catch(err => {
        console.error('DB connection failed.')
        console.error(err.message)
        console.error(err)
    })

// Server middleware
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
app.use(bodyParser.urlencoded({ extended: false }))

// Router
app.use(router)

app.listen(PORT, () => {
    console.log('listening on port 3000')
})

export default app
