const express=require('express')
const router=express();
const Student=require('../models/Student')


router.post('/add',async(req,res)=>{
    const student=new Student(req.body)
    const result=await student.save();
    if(result){
        return res.send({"result":"Success"})
    }else{
        return res.status(422).send("some error occured")
    }

})
router.get('/getStudentDetails',async(req,res)=>{
    const student=await Student.findOne({name:req.query.name})
    if(student){
        return res.send(student)
    }else{
        return res.status(422).send("unable to find")
    }
})


module.exports=router