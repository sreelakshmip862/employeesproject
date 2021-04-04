let express=require('express')
let app=express()

app.get('/home',(req,res)=>{
    res.send("welcome to EVA LADIES WORLD")
    })
    app.get('/shop',(req,res)=>{
        res.send("wide variety collections of dresses for ladies and kids")
        })
        app.get('/aboutus',(req,res)=>{
            res.send("Eira ladies world is established on 2020.world wide ecommerce selling app.managed by sree&athira")
            })
        app.get('/contactus',(req,res)=>{
            res.send("Eva ladies world,phn:7889077789/6778905567")
            })
           
app.listen(5000,()=>{
console.log("server started at http://localhost:5000/")
})