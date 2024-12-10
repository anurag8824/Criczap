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
import { useTranslation } from 'react-i18next';


const CricketRanking = () => {

    const [activeTab, setActiveTab] = useState("men");

    const [mendata, setMendata] = useState()
    const [womendata, setWomendata] = useState()
    const backUrl = process.env.REACT_APP_BACK_URL;


    const handleTabClick = (tab) => {
        setActiveTab(tab);

    };




    useEffect(() => {
        axios.get(`${backUrl}/api/v1/ranking`).then((res) => {
            console.log(res, "rankng")
            setMendata(res.data.response.ranks)
            setWomendata(res.data.response.women_ranks)
            // console.log(mdata)

            // data.response.ranks.teams.tests
        })
    }, [])



const {t} = useTranslation()


    return (
        <div className='md:mx-20 mx-4 '>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl dark:text-white font-medium'>{t("Cricket Rankings")}</p>

            </div>

            <div className='border mb-4 md:p-8 p-1 bg-white dark:border-none dark:text-white dark:bg-gray-800 py-10 rounded-xl w-full h-full'>


                <div className="   mt-8">
                    {/* Tab Buttons */}
                    <div className="relative flex gap-4 ">
                        <button
                            className={`md:w-1/2 w-full text-center py-2 text-lg font-normal ${activeTab === "men" ? "text-black dark:text-white" : "text-black dark:text-gray-300"
                                }`}
                            onClick={() => handleTabClick("men")}
                        >
                           {t("Men Ranking")}
                        </button>
                        <button
                            className={`md:w-1/2 w-full text-center py-2  text-lg font-normal ${activeTab === "women" ? "text-black dark:text-white" : "text-black dark:text-gray-300"
                                }`}
                            onClick={() => handleTabClick("women")}
                        >
                            {t("Women Ranking")}
                        </button>

                        {/* Underline */}
                        <div
                            className={`absolute bottom-0  rounded-lg h-1 bg-blue-950 transition-transform duration-300 ease-in-out ${activeTab === "men" ? "translate-x-0" : "translate-x-full"
                                }`}
                            style={{ width: "50%" }}
                        ></div>
                    </div>





                    {/* Content Sections */}
                    <div className="relative mt-6">

                        {activeTab === "men" && (
                            <div className="transition-opacity  duration-500 ease-in-out opacity-100">

                                {/* table starts cuuret  */}
                                <div className=''>


                                    <Teams mdata={mendata} />
                                    <Batters mdata={mendata} />
                                    <Bowlers mdata={mendata} />
                                    <AllRounder mdata={mendata} />

                                </div>



                            </div>
                        )}




                        {activeTab === "women" && (
                            <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                {/* table starts archived  */}


                                <div>
                                    <WTeams mdata={womendata} />
                                    <WBatters mdata={womendata} />
                                    <WBowlers mdata={womendata} />
                                    <WAllRounder mdata={womendata} />
                                </div>

                            </div>
                        )}

                    </div>
                </div>




            </div>


        </div>
    )
}

export default CricketRanking