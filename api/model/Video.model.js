const mongoose = require("mongoose")

const Video = new mongoose.Schema({
    videoID: {
        type: String
    },
    Image: {
        type: String,
        // default: ""

    },
    title: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    }


}, { timestamps: true })
const VideoData = mongoose.model("VideoDetail", Video)
module.exports = VideoData;