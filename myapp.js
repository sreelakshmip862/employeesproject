let express=require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var {studentModel}=require('./models/studentModel')
let app=express()
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())

app.post('/read',(req,res)=>{
    var studentObject=new studentModel(req.body);
    //var getName=req.body.name;
   //var getRoll=req.body.rollno;
   //studentObject.name=getName
  // studentObject.rollno=getRoll
   res.json(studentObject)
    res.send("welcome to home")
   

 
    })
    
app.listen(process.env.PORT||3000,()=>{
console.log("server started at  http://localhost:3000/")
})