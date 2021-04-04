const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    name:String,
    collegeName:String,
    location:String
})

module.exports = mongoose.model("Student", studentSchema);