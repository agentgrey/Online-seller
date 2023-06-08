/** ------------------ IMPORTING MONGOOSE ------------------ **/
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name :{
        type : 'String',
        required : true
    },
    email : {
        type : 'String',
        require : true,
        unique : true
    },
    password : {
        type : 'String',
        require : true
    }
}, {
    timestamps: true
})

/** ------------------ MAKING MODEL ------------------ **/
const User = mongoose.model("user", userSchema);

/** ------------------ EXPORTING MODEL ------------------ **/
module.exports = User;