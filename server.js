const express = require("express");
const mongoose = require("mongoose");
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PWD } = require('./config/config')

const app = express();

// Retry to connect to our DB until success -- NB : Not a Best practice but it do the job
const connectWithRetry = () => {
    mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PWD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`,
        { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => {
            console.log("successfully connected to db")
        })
        .catch((e) => {
            console.log(e);
            setTimeout(connectWithRetry,5000)
        })
}

connectWithRetry();

const port = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
    res.send("Hello Lovely Docker ! Let's play with it now using docker-compose, No Changes");
})

app.get("/hey", (req, res, next) => {
    res.send("Hello From Docker container using Docker compose Up");
})


app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
})