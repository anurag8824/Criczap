import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Teams from '../components/RankingComponents/Teams';
import Batters from '../components/RankingComponents/Batters';
import Bowlers from '../components/RankingComponents/Bowlers';
import AllRounder from '../components/RankingComponents/AllRounder';
import WTeams from '../components/RankingComponents/WTeams';
import WBatters from '../components/RankingComponents/WBatters';
import WBowlers from '../components/RankingComponents/WBowlers';
import WAllRounder from '../components/RankingComponents/WAllRounder';


const CricketRanking = () => {
    const [mendata, setMendata] = useState()
    const [womendata, setWomendata] = useState()
    const backUrl = process.env.REACT_APP_BACK_URL;

    const [showFullTable2, setShowFullTable2] = useState(true);



    useEffect(() => {
        axios.get(`${backUrl}/api/v1/ranking`).then((res) => {
            console.log(res, "rankng")
            setMendata(res.data.response.ranks)
            setWomendata(res.data.response.women_ranks)
            // console.log(mdata)

            // data.response.ranks.teams.tests
        })
    }, [])



    const handleToggle2 = () => {
        setShowFullTable2((prev) => !prev);
    };


    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>Cricket Ranking</p>

            </div>

            <div className='border mb-4 md:p-8 p-1 bg-white rounded-xl w-full h-full'>

                <div className=' w-full '>
                    <button
                        onClick={handleToggle2}
                        className="px-4 py-2 bg-violet-700   text-white rounded hover:bg-violet-800"
                    >
                        {showFullTable2 ? 'Women' : 'Men'}
                    </button></div>


                {showFullTable2 ?



                    <div className=''>


                        <Teams mdata={mendata} />
                        <Batters mdata={mendata} />
                        <Bowlers mdata={mendata} />
                        <AllRounder mdata={mendata} />


                    </div>
                    :

                    <div>

                        <WTeams mdata={womendata} />
                        <WBatters mdata={womendata} />
                        <WBowlers mdata={womendata} />
                        <WAllRounder mdata={womendata} />





                    </div>}





            </div>


        </div>
    )
}

export default CricketRanking