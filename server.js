const express = require("express");
const mongoose = require("mongoose")

const app = express();

mongoose.connect("mongodb://othy:pass@mongo:27017/?authSource=admin",
{ useUnifiedTopology: true,useNewUrlParser: true })
.then(()=>{
    console.log("successfully connected to db")
})
.catch((e)=> console.log(e))

const port = process.env.PORT || 3000;

app.get("/",(req,res,next)=>{
    res.send("Hello Lovely Docker ! Let's play with it now using docker-compose, No Changes");
})

app.get("/hey",(req,res,next)=>{
    res.send("Hello From Docker container using Docker compose Up");
})


app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`)
})