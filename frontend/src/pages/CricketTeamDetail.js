import React, { useState } from 'react'
import Home from '../components/TeamDetailComponents/Home'
import Recent from '../components/TeamDetailComponents/Recent'
import Upcoming from '../components/TeamDetailComponents/Upcoming'
import News from '../components/TeamDetailComponents/News'
import Videos from '../components/TeamDetailComponents/Videos'
import Players from '../components/TeamDetailComponents/Players'
import Series from '../components/TeamDetailComponents/Series'
import { useNavigate, useParams } from 'react-router-dom'
import FbConnect from '../components/FbConnect'

const CricketTeamDetail = () => {

    const [activeTab, setActiveTab] = useState("home");
    const navigate = useNavigate();

    // const scrollRef = useRef(null)

    const tabs = ["home", "recent", "upcoming", "news", "videos", "players", "series"]

    const activeIndex = tabs.indexOf(activeTab);

    const tid = useParams().id

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/cricket-team-detail/${tid}/${tab}`)

    };

    return (
        <div className='md:mx-20 mx-4 '>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>India Cricket Team </p>
                {/* <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' /> */}
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full'>



                    <div className="w-full max-w-4xl mx-auto mt-8">


                        {/* Tab Buttons */}
                        <div className="relative overflow-x-scroll scrollbar-hide gap-2 flex-shrink-0 flex px-3">




                            {/* Render each tab button */}
                            {tabs.map((tab, index) => (
                                <button

                                    key={tab}
                                    className={`md:w-1/6 w-1/4  gap-2 flex-shrink-0 text-center py-2 text-lg font-normal ${activeTab === tab ? "text-black" : "text-gray-500"
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
                                className="absolute md:w-1/6  w-1/4  bottom-0 h-1 bg-blue-800 transition-transform duration-300 ease-in-out rounded-lg"
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
                                    <Recent />
                                </div>
                            )}


                            {activeTab === "upcoming" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Upcoming />
                                </div>
                            )}

                            {activeTab === "news" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <News />
                                </div>
                            )}

                            {activeTab === "videos" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Videos />
                                </div>
                            )}


                            {activeTab === "players" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Players />
                                </div>
                            )}

                            {activeTab === "series" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Series />
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