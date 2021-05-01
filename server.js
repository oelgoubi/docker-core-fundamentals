const express = require("express");

const app = express();

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