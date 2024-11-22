const Router = require("express")
const router = Router();

const Admin = require("../controller/Admin.controller.js")

router.post("/adminlogin", Admin.AdminLogin)
router.post("/addadmin", Admin.AdminAdd)

module.exports = router;