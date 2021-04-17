let express=require('express')
var bodyParser = require('body-parser')

let app=express()
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())

app.post('/read',(req,res)=>{
    var getName=req.body.name
   var getRoll=req.body.rollno
   res.json({"name":getName,"rollno":getRoll})
   // res.send("welcome to home")
    })
    
app.listen(process.env.PORT||3000,()=>{
console.log("server started at  http://localhost:3000/")
})