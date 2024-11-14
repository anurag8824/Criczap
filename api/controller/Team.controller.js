const axios = require("axios");
const token = "91e89bd6c7b1f611304ba0f6faf45fd3"

// const 


const HomeApi = async (req, res) => {

   try {
     axios.get(`https://rest.entitysport.com/exchange/matches/?token=${token}&date=2024-11-13_2024-11-15&timezone=+5:30&&paged=1&per_page=100`).then((resp) =>{
         res.json(resp.data)
     })
   } catch (error) {
    
   }
}

const HomePopular = async (req, res) => {
    console.log("home pupular hit")


    try {
      axios.get(`https://rest.entitysport.com/exchange/matches/?token=${token}&date=2024-11-13_2024-11-15&timezone=+5:30&&paged=1&per_page=100`).then((resp) =>{

        console.log(resp.data,"pop")
          res.json(resp.data)

      })
    } catch (error) {
     
    }
 }

const TeamData = async (req, res) => {
    try {
        axios.get(`https://rest.entitysport.com/exchange/teams?token=${token}&&paged=1&per_page=50`).then((resp) => {
            // console.log(data);
            //   console.log(resp.data)
            res.json({ msg: resp.data.response })
        })

    } catch (error) {
        console.log(error);
        res.json({ msg: "Internal Server Error !" })
    }

}

const PlayerData = async (req, res) => {
    try {
        axios.get(`https://rest.entitysport.com/exchange/players?token=${token}&&paged=1&per_page=50`).then((
            resp
        ) => {
            // console.log(resp.data)
            res.json({ msg: resp.data.response })
        })

    } catch (error) {

        console.log(error);
        res.json({ msg: "Internal Server Error !" })

    }
}




const TeamSerach = async (req, res) => {
    const teamname = req.body.search;
    console.log(teamname);
    try {
        axios.get(`https://rest.entitysport.com/exchange/teams?search=${teamname}&token=${token}&&paged=1&per_page=50`).then((resp) => {
            // console.log(data);
            //  console.log(resp.data)
            res.json({ msg: resp.data.response })
        })

    } catch (error) {
        //  console.log(error);
        res.json({ msg: "Internal Server Error !" })
    }


}



const PlayerSerach = async (req, res) => {
    const playername = req.body.search;
    console.log(playername);
    try {
        axios.get(`https://rest.entitysport.com/exchange/players?search=${playername}&token=${token}&&paged=1&per_page=50`).then((resp) => {
            // console.log(data);
            //  console.log(resp.data)
            res.json({ msg: resp.data.response })
        })

    } catch (error) {
        //  console.log(error);
        res.json({ msg: "Internal Server Error !" })
    }


}


const PlayerInformation = async (req, res) => {
    try {
        const id = req.body.playerid;
        console.log("playerid:", id)
        if (!id) {
            return res.json({ msg: "Oppps some error in Url ......." })

        }

        axios.get(`https://rest.entitysport.com/exchange/players/${id}/stats?token=${token}`)
            .then((resp) => {
                console.log(res, "data from the Player stats")
                res.json(resp.data)
            })
            .catch((err) => {
                console.log(err, "data from the Player stats")
                res.json({ msg: "error in fetchting Player data" })
            })
    } catch (error) {
        res.json({ msg: "Internal Server Error !" })
    }
}


const PerivousData = async (req, res) => {
    try {
        const matchid = req.body.matchid;
        if (!matchid) {
            return res.json({ msg: "Matchid not found" })
        }
        axios.get(`https://rest.entitysport.com/exchange/matches/${matchid}/info?token=${token}`).then((resp) => {
            res.json(resp.data);
        })
    } catch (error) {
        res.json({ msg: "Internal error: " })
    }
}


const CompeteInfo = async (req, res) => {
    try {
        const cid = req.body.cid;
        if (!cid) {
            return res.json({ msg: "invalid cid" })
        }
        // axios.get(`https://rest.entitysport.com/exchange/competitions/${cid}/info?token=${token}`).then((resp) => {
        //     res.json(resp.data);
        // })

        axios.get(`https://rest.entitysport.com/exchange/competitions/${cid}/matches?token=${token}`).then((resp) => {
            res.json(resp.data);
        })

    } catch (error) {
        res.json({ msg: "Internal error:" })
    }
}


const CompationsList = async (req, res) => {
    try {
        console.log("API hit");
        // const token = 'your_token_here'; // Make sure to define or pass the token

        // Initial API call to get the total number of pages
        const initialResponse = await axios.get(`https://rest.entitysport.com/exchange/competitions?&token=${token}&per_page=50&paged=1`);
        const totalPages = initialResponse.data.response.total_pages;
        let allcomp = initialResponse.data.response.items;

        // Create an array of promises for subsequent pages
        const promises = [];
        for (let i = 2; i <= totalPages; i++) {
            promises.push(axios.get(`https://rest.entitysport.com/exchange/competitions?&token=${token}&per_page=50&paged=${i}`));
        }

        // Wait for all promises to resolve
        const responses = await Promise.all(promises);
        responses.forEach(response => {
            allcomp = allcomp.concat(response.data.response.items);
        });

        // Send the final result
        const liveMatches = allcomp.filter(match => match.status === 'live');
        const fixtureMatches = allcomp.filter(match => match.status === 'upcoming');
        const fourMonthsAgo = new Date();
        fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);

        const resultMatches = allcomp.filter(match => {
            const matchDate = new Date(match.datestart); // Parse the date string
            return match.status === 'result' && matchDate >= fourMonthsAgo;
        });

        res.json({ msg: "hello world", liveMatches, fixtureMatches, resultMatches });
        // res.json({ msg: "hello world", allcomp});

    } catch (error) {
        console.error(error);
        res.json({ msg: "Internal server error" });
    }
};


const Ranking = async (req, res) => {
    try {
        axios.get(`https://rest.entitysport.com/exchange/iccranks?token=${token}`).then((resp) => {
            res.json(resp.data);
        })
    } catch (error) {
        console.error(error);
        res.json({ msg: "Internal Server Error" })
    }
}



module.exports = { TeamData, HomeApi, CompeteInfo, PlayerData, Ranking, TeamSerach, PlayerSerach, PlayerInformation, PerivousData, HomePopular, CompationsList }