import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors' 
import userRoutes from './routes/user.js'
import questionRoutes from './routes/question.js'
import answerRoutes from './routes/answer.js'
// import connectDB from './connection.js'

const app = express();
dotenv.config()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())
app.get('/', (req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes)


const PORT = process.env.PORT || 5000

const BASE_URL = process.env.CONNECTION_URL

mongoose.connect(BASE_URL).then(() => app.listen(PORT, () => { console.log(`server is running on ${PORT}`) })).catch((err) => console.log(err.message))