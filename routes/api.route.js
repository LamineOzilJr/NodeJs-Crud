const express = require("express");
const StudentController = require('../controllers/StudentController');
const route = express.Router();

route.get('/students', StudentController.getAll);
route.get('/student/:id', StudentController.getOne);
route.post('/student', StudentController.create);
route.patch('/student', StudentController.update);
route.delete('/student', StudentController.delete);

module.exports = route;