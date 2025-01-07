const express= require('express')
var cors = require('cors')
const mongoose = require('mongoose') 
const dotenv = require('dotenv')


dotenv.Config("./.env")

const dbpassword = process.env.DB_PASSWORD


mongoose.connect("mongodb+srv://anascu666:<db_password>@main.mxyqm.mongodb.net/?retryWrites=true&w=majority&appName=main")
.then(res => {
    console.log("Connected to MongoDB")
})

.catch(err => {
    console.log("Failed to connect to MongoDB")})




const app = express()


const TaskSchema = new mongoose.Schema({
    task : {type: String},
    isCompleted: Boolean
})
const Task = mongoose.model('Task', TaskSchema)


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    password: String
})

const User = mongoose.model('User', userSchema)



app.use(cors({
      origin: ['http://localhost:5173'],
    
    }))
    
app.use(express.json())


app.get('/', (req, res) => {
    Task.find()
    .then(res =>{
        console.log(taskItems)
        res.json({task: taskItems, count: taskItems.length})

    }).catch(err =>{
    })
    res.json({tasks})
})

app.post('/add', (req, res) => {
    console.log(req.body)
    const tasks = req.body.task
    Task.create({task: UserTask})
    res.send("success")
})

app.put("/task/:id", (req, res) => {                                                                                                               
if (index === -1) { return res.status(404).json({ message: "Task not found" }); } 
    if (!task) { return res.status(400).json({ message: "Task cannot be empty" }); })

app.delete("/task/:index/:id", (req,res) =>{
   Task.findByIdAndDelete(id)
   .then(() => {
        console.log("Task deleted")
        res.send("Task deleted")
    })
    .catch(err => {
        console.log(err)
        res.send("something went wrong")
    })
} )

app.listen(3000)