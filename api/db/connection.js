const mongoose = require("mongoose")


module.exports = connection = async () => {
    await mongoose.connect("mongodb+srv://rahulk67:12345@cluster0.zw558.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("Database connected succesfully")
        })
        .catch((err) => {
            console.log("error in connecting database", err)
        })
}

// module.exports =  connection