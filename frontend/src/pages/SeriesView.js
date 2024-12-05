import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FbConnect from '../components/FbConnect'

import OverView from '../components/CricketSeriesComponents/OverView';
import Fixtures from '../components/CricketSeriesComponents/Fixtures';
import News from '../components/CricketSeriesComponents/News';
import Videos from '../components/CricketSeriesComponents/Videos';
import Squads from '../components/CricketSeriesComponents/Squads';
import Stats from '../components/CricketSeriesComponents/Stats';
import Venues from '../components/CricketSeriesComponents/Venues';
import axios from "axios"
import BoxLoader from './BoxLoader';
import NewsBundle from '../components/NewsBundle';






const SeriesView = () => {
    const [activeTab, setActiveTab] = useState("overview");
    const navigate = useNavigate();
    const backUrl = process.env.REACT_APP_BACK_URL;
    const [mlist, setMlist] = useState([])
    const [pointdata, setPointdata] = useState([])


    const cId = useParams().id;
    // console.log(cid,"compid")

    const tabs = ["overview", "fixtures", "news", "videos", "points", "venues"]

    const activeIndex = tabs.indexOf(activeTab);




    useEffect(() => {
        try {
            axios.post(`${backUrl}/api/v1/compinfo`, { cid: cId })
                .then((res) => {
                    const finaldata = res.data
                    setMlist(finaldata)
                    console.log(finaldata, "tournamentinfo df")

                })
        } catch (error) {
            console.log(error, "errro occurred")
        }


    }, [])



    useEffect(() => {
        try {
            axios.post(`${backUrl}/api/v1/seriesinfo`, { cid: cId })
                .then((res) => {
                    const finaldata = res.data
                    setPointdata(finaldata)

                    console.log(finaldata, "series points info")

                })
        } catch (error) {
            console.log(error, "errro occurred")
        }


    }, [])

    const formatUrl = (text) => {
        return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
    };


    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/cricket-series/${cId}/${formatUrl(pointdata?.response?.title ? pointdata?.response?.title : "null")}/${tab}`)

    };



    return (
        <div className='md:mx-20 mx-4 '>

           

                <div className='  px-1  py-10 justify-between'>
                    <p className='text-2xl  font-medium'>{pointdata?.response?.title}</p>

                    {pointdata?.response?.datestart ?
                    <p className=' flex text-sm text-gray-500 '>
                        {new Date(pointdata?.response?.datestart).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                        })} to  {new Date(pointdata?.response?.dateend).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                        })}
                    </p>
                    : <BoxLoader/>}

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
                                className="absolute md:w-1/6  w-1/4  bottom-0 h-1 bg-blue-950 transition-transform duration-300 ease-in-out rounded-lg"
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
                            {activeTab === "overview" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <OverView data={mlist} />
                                </div>
                            )}

                            {activeTab === "fixtures" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Fixtures data={mlist} />
                                </div>
                            )}


                            {activeTab === "news" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    {/* <News /> */}
                                    <NewsBundle/>
                                </div>
                            )}

                            {activeTab === "videos" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Videos />
                                </div>
                            )}

                            {activeTab === "points" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Squads data={pointdata} />
                                </div>
                            )}


                            {activeTab === "stats" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    {/* <Stats /> */}
                                    <p className='text-center text-red-500 text-sm font-medium'>Not available</p>

                                </div>
                            )}

                            {activeTab === "venues" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Venues data={mlist} />
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

export default SeriesView