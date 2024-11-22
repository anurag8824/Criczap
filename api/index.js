const express = require("express");

const axios = require("axios")
const app = express();

const cors = require("cors");
console.log(cors, "cors")

app.use(cors({
    origin: "*", credentials: true
}));


const Team = require("./router/Team.router.js")
const Admin = require("./router/Admin.router.js")


const connection = require("./db/connection.js")
connection();



app.use(express.json())


app.use("/api/v1", Team)
app.use("/admin", Admin)




app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(8050, () => {
    console.log("Server is Running on Port 8050")
});
