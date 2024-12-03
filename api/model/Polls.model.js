const mongoose = require("mongoose")
const crypto = require("crypto")

const Polls = new mongoose.Schema({
    PollId:{
        type:String
    },
    question:{
        type:String
    },
    option1:{
        type:String
    },
    option2:{
        type:String
    }
}, {timestamps:true})

const PollList = mongoose.model("Polls List" , Polls)
module.exports = PollList;