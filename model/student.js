var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email : {
        type : 'String',
        required: true,
    },
    phone : String
});
var student = new mongoose.model('Student', schema);
module.exports = student;