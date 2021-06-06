let express=require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var {employeeModel}=require('./models/employeeModel')
//const { studentModel } = require('./models/studentModel')//
mongoose.connect("mongodb+srv://sreelakshmi:sreelachu96@cluster0.nrm6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})
//  mongoose.connect("mongodb://mongo:27017/docker-node-mongo",{useNewUrlParser:true})//
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

    app.post('/search',async(req,res)=>{
        
        try{
            var result=await employeeModel.find(req.body)
            res.json(result)
 
        }
        catch(error)
        {
          res.json({"status":"error"})
        }
     
      
         })
         app.post('/edit',async(req,res)=>{
        
            try{
                var result=await employeeModel.findOneAndUpdate
                
                ({"_id":req.body._id},req.body)
                res.json(result)
     
            }
            catch(error)
            {
              res.json({"status":"error"})
            }
         
          
             })
             app.post('/delete',async(req,res)=>{
        
                try{
                    var result=await employeeModel.findByIdAndDelete
                    
                    ({"_id":req.body._id})
                    res.json(result)
         
                }
                catch(error)
                {
                  res.json({"status":"error"})
                }
             
              
                 })

 
    app.listen(process.env.PORT||3000,()=>{
        console.log("server started")
        })
   
    
