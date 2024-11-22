const mongoose = require("mongoose")

const Admin = new mongoose.Schema({
    Email : {
        type: String,
        default: "criczap@gmail.com"
    },
    Password:{
        type: String,
        default: "1234"
    }
})

const AdminData = mongoose.model("AdminDetail",Admin)

module.exports =  AdminData;