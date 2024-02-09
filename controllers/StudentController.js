const Student = require('../model/student');

exports.create = async (req, res) => {
    try{
        var obj = {
            firstName : 'Lamine',
            lastName : 'NDIAYE',
            email : 'alAmiine@gmail.com', 
            phone : '771234567'
        };
        const student = await Student.create(obj)
        res.status(200).json(student)
    }catch (err){
        console.log(err.message);
        res.status(500).json({message : err.message})
    }
}

exports.getAll = (req, res) => {
  res.send("get all students")
};

exports.getOne = (req, res) => {
    res.send("find student by id")
};

exports.update = (req, res) => {
    res.send("update student by id")
};

exports.delete = (req, res) => {
    res.send("delete student  by id")
};