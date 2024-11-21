const Router = require("express")
const router = Router();
const TeamData = require("../controller/Team.controller.js")



router.get("/allteam",TeamData.TeamData)
router.get("/allplayer", TeamData.PlayerData )
router.post("/searchteam",TeamData.TeamSerach)
router.post("/searchplayer",TeamData.PlayerSerach)
router.post("/playerinfo",TeamData.PlayerInformation)
router.post("/pre/data",TeamData.PerivousData)
router.get("/match/list",TeamData.CompationsList)
router.get("/ranking", TeamData.Ranking)
router.post("/compinfo", TeamData.CompeteInfo)
router.get("/homedata", TeamData.HomeApi)
router.get("/popular", TeamData.HomePopular)
router.post("/teaminfo", TeamData.TeamMatches)
router.post("/teamname", TeamData.TeamInfo)
router.post("/teamplayers", TeamData.TeamPlayers)








module.exports = router