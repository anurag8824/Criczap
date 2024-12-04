const AdminData = require("../model/Admin.model");
const NewsData = require("../model/News.model");
const crypto = require('crypto');
const VideoData = require("../model/Video.model");
const PollList = require("../model/Polls.model");




const AdminLogin = async (req, res) => {
    try {
        const Email = req.body.Email;
        const Password = req.body.Password;
        const Admin = await AdminData.findOne({ Email })


        if (!Admin) {
            return res.json({ msg: "Email is not exist!" })
        }
        if (Admin.Password != Password) {
            return res.json({ msg: "Password is wrong" })
        }
        res.json({ msg: "Login Success" })
    } catch (error) {
        console.log(error)
        res.json({ msg: "error" })

    }
}

const AdminAdd = async (req, res) => {
    await AdminData.create({});
    res.json({ msg: "success" });
}



const AddNews = async (req, res) => {
    // console.log(req.body)
    const news_Id = crypto.randomBytes(8).toString('hex');

    if (!req.file) {
        await NewsData.create({
            newsID: news_Id,
            headline: req.body.headline,
            text: req.body.text,
            title: req.body.title,
            permalink: req.body.permalink,
            description: req.body.description


        });
        res.json("News add succesfully")

    } else {
        try {
            const selectedFile = `/images/${req.file.filename}`;

            await NewsData.create({
                newsID: news_Id,

                selectedFile: selectedFile,

                headline: req.body.headline,
                text: req.body.text,
                title: req.body.title,
                permalink: req.body.permalink,
                description: req.body.description

            })
            res.json("News Add succesfully")
            // console.log(selectedFile)
        } catch (error) {
            // console.log(error)
        }


    }
}



const AllNews = async (req, res) => {
    const allnews = await NewsData.find({})
    if (allnews.length > 0) {
        res.json(allnews)
    } else {
        res.json({ msg: "No post Found" })
    }

}

const NewsInfo = async (req, res) => {

    const id = req.body.newsid
    console.log(id)

    if (!id) {
        return res.json({ msg: "Invalid ID" })
    } else {
        const onenews = await NewsData.findOne({newsID: id})
        return res.json(onenews)


    }

}

const AddVideo = async (req, res) => {
    const video_Id = crypto.randomBytes(8).toString('hex');

    if (!req.file) {
        await VideoData.create({
            videoID: video_Id,

            title: req.body.title,
            link: req.body.link,

        })
        res.json("Video add succesfully")


    }
    else {
        const Image = `/images/${req.file.filename}`;
        console.log(Image, "checkfff")

        await VideoData.create({
            videoID: video_Id,
            Image: Image,
            title: req.body.title,
            link: req.body.link
        })
        res.json("Video Add succesfully")


    }



}

const AllVideo = async (req, res) => {
    const allvideos = await VideoData.find({})
    if (allvideos.length > 0) {
        res.json(allvideos)
    } else {
        res.json({ msg: "no video found" })
    }
}

const AddPoll = async (req, res) => {
    const poll_id = crypto.randomBytes(8).toString('hex');
    await PollList.create({

        PollId: poll_id,
        question: req.body.question,
        option1: req.body.option1,
        option2: req.body.option2


    })
    res.json("Poll Add succesfully")


}

const GetPolls = async (req, res) => {
    const allpolls = await PollList.find({})
    if (allpolls.length > 0) {
        res.json(allpolls)
    } else {
        res.json({ msg: "No poll found" })
    }

}

module.exports = { AdminLogin, AddPoll, NewsInfo, GetPolls, AllNews, AddVideo, AllVideo, AdminAdd, AddNews }