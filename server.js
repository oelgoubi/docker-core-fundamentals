const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/",(req,res,next)=>{
    res.send("Hello Lovely Docker !, Let me see changes");
})


app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`)
})