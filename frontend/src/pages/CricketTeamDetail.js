import React, { useEffect, useState } from 'react'
import Home from '../components/TeamDetailComponents/Home'
import Recent from '../components/TeamDetailComponents/Recent'
import Upcoming from '../components/TeamDetailComponents/Upcoming'
import News from '../components/TeamDetailComponents/News'
import Videos from '../components/TeamDetailComponents/Videos'
import Players from '../components/TeamDetailComponents/Players'
import Series from '../components/TeamDetailComponents/Series'
import { useNavigate, useParams } from 'react-router-dom'
import FbConnect from '../components/FbConnect'
import axios from 'axios'
import NewsBundle from '../components/NewsBundle'


const CricketTeamDetail = () => {

    const [activeTab, setActiveTab] = useState("home");
    const [name, setName] = useState([])
    const [resultM, setResultM] = useState([])
    const [liveM, setLiveM] = useState([])

    const [nextM, setNextM] = useState([])

    const [pdata, setPdata] = useState([])

    const navigate = useNavigate();

    // const scrollRef = useRef(null)

    const tabs = ["home", "recent", "upcoming", "news", "series", "players", "videos"]

    const activeIndex = tabs.indexOf(activeTab);

    const tid = useParams().id

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/cricket-team-detail/${tid}/${tab}`)

    };

    const backUrl = process.env.REACT_APP_BACK_URL

    useEffect(() => {
        try {
            axios.post(`${backUrl}/api/v1/teaminfo`, { tid })
                .then((res) => {
                    console.log(res, "team matches")
                    const livedata = res.data.livMatches;
                    setLiveM(livedata)

                    const restdata = res.data.resultMatches;
                    setResultM(restdata)

                    const nextdata = res.data.upMatches.reverse();
                    setNextM(nextdata)





                })
        } catch (error) {

        }


    }, [])

    useEffect(() => {
        try {
            axios.post(`${backUrl}/api/v1/teamname`, { tid })
                .then((res) => {
                    console.log(res, "team info")
                    setName(res.data)

                })
        } catch (error) {

        }


    }, [])

    useEffect(() => {
        try {
            axios.post(`${backUrl}/api/v1/teamplayers`, { tid })
                .then((res) => {
                    console.log(res, "team players")
                    setPdata(res.data.msg.response.items.players)

                })
        } catch (error) {

        }


    }, [])


    return (
        <div className='md:mx-20 mx-4 '>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl dark:text-white font-medium'>{name.msg?.response.title}</p>
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white dark:border-none dark:text-white dark:bg-gray-800 rounded-xl md:w-3/4 w-full'>



                    <div className="w-full max-w-4xl mx-auto mt-8">


                        {/* Tab Buttons */}
                        <div className="relative overflow-x-scroll scrollbar-hide gap-2 flex-shrink-0 flex px-3">




                            {/* Render each tab button */}
                            {tabs.map((tab, index) => (
                                <button

                                    key={tab}
                                    className={`md:w-1/6 w-1/4  gap-2 flex-shrink-0 text-center py-2 text-lg font-normal ${activeTab === tab ? "text-black dark:text-white" : "text-gray-500"
                                        }`}
                                    // style={{width:"14.28%"}}
                                    // style={{ width: `${100 / tabs.length}%`}}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}

                            {/* Underline */}
                            <div
                                className="absolute md:w-1/6  w-1/4  bottom-0 h-1 bg-blue-800 dark:bg-gray-700 transition-transform duration-300 ease-in-out rounded-lg"
                                style={{
                                    // width:'20%',
                                    // width: `${100 / tabs.length}%`, // The underline width is dynamically set based on the number of tabs
                                    transform: `translateX(${activeIndex * 100}%)`, // Move underline based on the active tab index
                                }}
                            ></div>
                        </div>



                        {/* {activeTab === "current" ? <SeriesFilter /> : null} */}
                        {/* {activeTab === "archive" ? <YearFilter /> : null} */}




                        {/* Content Sections */}
                        <div className="relative mt-6  px-3">
                            {activeTab === "home" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Home />

                                </div>
                            )}

                            {activeTab === "recent" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Recent data={[...liveM, ...resultM]} />
                                </div>
                            )}


                            {activeTab === "upcoming" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Upcoming data={nextM} />
                                </div>
                            )}

                            {activeTab === "news" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <NewsBundle />
                                </div>
                            )}

                            {activeTab === "series" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Series data={[...liveM, ...nextM, ...resultM,]} />
                                </div>
                            )}

                            {activeTab === "players" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Players data={pdata} />
                                </div>
                            )}



                            {activeTab === "videos" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Videos />
                                </div>
                            )}





                        </div>

                    </div>







                </div>

                <FbConnect />


            </div>


        </div>
    )
}

export default CricketTeamDetail