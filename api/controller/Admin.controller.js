const AdminData = require("../model/Admin.model")



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

module.exports = { AdminLogin, AdminAdd }