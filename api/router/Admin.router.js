const Router = require("express")
const router = Router();

const Admin = require("../controller/Admin.controller.js");
const upload = require("../middlewares/multerver.js");

router.post("/adminlogin", Admin.AdminLogin)
router.post("/addadmin", Admin.AdminAdd)
router.post("/addnews", upload.single('selectedFile'), Admin.AddNews)
router.get("/allnews", Admin.AllNews)

router.post("/addvideo", upload.single('Image'), Admin.AddVideo)
router.get("/allvideos", Admin.AllVideo)

router.post("/addpoll", Admin.AddPoll)
router.get("/getpolls", Admin.GetPolls)






module.exports = router;