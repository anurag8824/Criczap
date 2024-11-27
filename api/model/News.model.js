const mongoose = require("mongoose")
const crypto = require('crypto');





const News = new mongoose.Schema({
    newsID: {
        type: String
    },
    selectedFile: {
        type: String,


    },

    headline: {
        type: String,
        default: ''

    },
    text: {
        type: String,
        default: ""

    },
    title: {
        type: String,
        default: ''

    },
    permalink: {
        type: String,
        default: ""

    },
    description: {
        type: String,
        default: ''

    },

}, { timestamps: true })

const NewsData = mongoose.model("News Detail", News)
module.exports = NewsData;

