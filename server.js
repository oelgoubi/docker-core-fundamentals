const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/",(req,res,next)=>{
    res.send("Hello Lovely Docker ! Let's play with it now");
})

app.get("/hey",(req,res,next)=>{
    res.send("Hello From Docker container");
})


app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`)
})