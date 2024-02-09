const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const Student = require('./model/student.js');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())

mongoose.connect(dbConfig.url).then(() => {
    console.log("Connexion Successfully");
}).catch(() => {
    console.log("Cannot connect to the Database")
})

app.get('/', async (req, res) => {
    res.send("Welcome To Lamine's Node API")
});

app.post('/students', async (req, res) => {
    try{
        const student = await Student.create(req.body)
        res.status(200).json(student)
    }catch (err){
        console.log(err.message);
        res.status(500).json({message : err.message})
    }
});

app.get('/students', async (req, res) => {
    try{
        const students = await Student.find({})
        res.status(200).json(students)
    }catch (err){
        console.log(err.message);
        res.status(500).json({message : err.message})
    }
});
// get student by id
app.get('/student/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const student = await Student.findById(id);
        if(student){
            return res.status(200).json(student)
        }
        return res.json({message : "student with id "+id+" does not exist"})
    }catch (err){
        console.log(err.message);
        res.status(500).json({message : err.message})
    }
});

// update
app.put('/student/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        if(!student){
            return res.status(404).json({message : 'unable to find any student with ${id}'})
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent)
    }catch (err){
        console.log(err.message);
        res.status(500).json({message : err.message})
    }
});

// delete
app.delete('/student/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id, req.body);
        if(!student){
            return res.status(404).json({message : 'unable to find any student with ${id}'})
        }
        res.status(200).json({message : "student deleted successfully"})
    }catch (err){
        console.log(err.message);
        res.status(500).json({message : err.message})
    }
});

app.listen(4444, () => {
    console.log("Server is listening on port 4444");
});