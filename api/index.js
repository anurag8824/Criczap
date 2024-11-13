const express = require("express");

const axios = require("axios")
const cors = require("cors");

const app = express();
const Team = require("./router/Team.router.js")
app.use(express.json())
app.use(cors({ origin: "*" }));

app.use("/api/v1",Team)


app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(8050,()=>{
    console.log("Server is Running on Port 8050")
});
