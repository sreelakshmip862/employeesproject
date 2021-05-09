let express=require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var {employeeModel}=require('./models/employeeModel')
const { studentModel } = require('./models/studentModel')
mongoose.connect("mongodb+srv://sreelakshmi:sreelachu96@cluster0.nrm6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})
let app=express()
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())
app.get('/',(req,res)=>
    {
        res.send("welcome to employee details")
    })

app.post('/read',(req,res)=>{
    var employeeObject=new employeeModel(req.body);
    
  employeeObject.save(
      (error)=>{
          if(error)
          {
              res.send("ERROR"+error)
          }
          else
          {
              res.json({"status":"success"})
          }
      }
  )

   
  
    
 
    })
    app.get('/viewall',async(req,res)=>{
        try{
        var result= await employeeModel.find()
        res.json(result)
        }
        catch(error)
        {
res.send(error)
        }
    })
    app.listen(process.env.PORT||5000,()=>{
        console.log("server started at  http://localhost:5000/")
        })
   
    
