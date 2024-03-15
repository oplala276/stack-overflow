import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors' 
import userRoutes from './routes/user.js'
import questionRoutes from './routes/question.js'

const app = express();

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())
app.get('/', (req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://oplala2020:zU5uvKu9y4gT2wUC@cluster0.fbhp72i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => { console.log(`server is running on ${PORT}`) })).catch((err) => console.log(err.message))
// , {useNewUrlParser: true, useUnifiedTopology: true}