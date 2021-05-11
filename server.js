const express = require("express");
const mongoose = require("mongoose");
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PWD } = require('./config/config');
const postRoutes = require("./routes/postRoutes")

const app = express();
// Parse the  body and make sure that the body object is attached to req
app.use(express.json());

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



app.get("/", (req, res, next) => {
    res.send("Hello Lovely Docker ! Let's play with it now using docker-compose, No Changes");
})

app.use("/api/v1/posts",postRoutes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is Running on Port ${port}`)
})