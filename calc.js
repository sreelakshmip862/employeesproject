let express=require('express')
var bodyParser = require('body-parser')

let app=express()
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("welcome to my website")
})

app.post('/add',(req,res)=>{
    var getNum1=parseFloat(req.body.no1)
     var getNum2=parseFloat(req.body.no2)
var x=getNum1+getNum2
   res.json({"sum":x})
    //res.send("welcome to home")
    })
    
app.listen(process.env.PORT||3000,()=>{
console.log("server started at  http://localhost:3000/")
})