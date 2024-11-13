import React, { useEffect, useState } from 'react'
import FbConnect from '../components/FbConnect';

import Commentary from '../components/MatchDetailComponents/Commentary';
import Scorecard from '../components/MatchDetailComponents/Scorecard';
import Info from '../components/MatchDetailComponents/Info';
import Squad from '../components/MatchDetailComponents/Squad';
import Highlights from '../components/MatchDetailComponents/Highlights';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { useMyContext } from './MyProvider';

import { io } from "socket.io-client";




const MatchDetailView = () => {

    const [activeTab, setActiveTab] = useState("commentary");
    const [ballevent, setBallevent] = useState()
    const [livedata, setLivedata] = useState(null)
    const socketUrl = process.env.REACT_APP_URL;

    const backUrl = process.env.REACT_APP_BACK_URL;

    console.log(socketUrl, "backurl: ")


    const navigate = useNavigate();
    const token = "91e89bd6c7b1f611304ba0f6faf45fd3"

    const tabs = ["commentary", "scorecard", "info", "squad", "highlights"]

    const activeIndex = tabs.indexOf(activeTab);

    const matchId = useParams().id
    console.log(matchId, "matchId=")

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/match-detail/${matchId}/${tab}`)

    };


    useEffect(() => {
        // const ws = new WebSocket(`ws://localhost:8000`)

        const socket = io(`${socketUrl}`); // Adjust URL as needed
        // ws.onopen = () => {
        //     console.log('WebSocket connection established');
        // }

        socket.on("connect", () => {
            console.log("Connected to the Socket.IO server");
        });

        // ws.onmessage = (event) => {


        //     const data = JSON.parse(event.data)
        //     // console.log('Message received:', data);

        //     if (data.response.match_id == matchId) {
        //         console.log(data, "data");

        //         console.log(data.response?.ball_event, "hhhhhhhhh")

        //         if (data.response?.ball_event
        //         ) {
        //             setBallevent(data);

        //             console.log(ballevent, "jhhh");
        //         } else {
        //             setLivedata(data);
        //         }
        //     }
        // };

        socket.on("scoreUpdate", (data) => {
            // console.log("Received score update:", data);
            // Process and display score data on frontend as needed

            if (data.response.match_id == matchId) {
                console.log(data, "data");

                console.log(data.response?.ball_event, "hhhhhhhhh")

                if (data.response?.ball_event
                ) {
                    setBallevent(data);

                    console.log(ballevent, "jhhh");
                } else {
                    setLivedata(data);
                }
            }
        });


        // ws.onerror = (err) => {
        //     console.log('Error in connection to socket:', err);
        // };

        return () => {
            socket.disconnect();
            console.log("Socket.IO connection closed");
        };
    }, [])


    useEffect(() => {

        axios.post(`${backUrl}/api/v1/pre/data`, { matchid: matchId })
            .then((res) => {
                console.log(res, "prev datata abtaoned")
                const data = res.data;
                setLivedata(data);

            }).catch((err) => {
                console.log(err, "error abta")
            })

    }, [])


    // context data 
    // const {cdata} =  useMyContext();



    return (
        <div className='md:mx-20 mx-4  '>

            <div className='flex px-1  py-10 justify-between'>
                <div>
                    <p className='text-2xl  font-medium'>{livedata?.response.match_info.title}, {livedata?.response.match_info.subtitle} Match</p>
                    <p className='text-base  font-normal text-gray-500'>Date & Time: {livedata?.response.match_info.date_start_ist}</p>

                    <p className='pb-2 '><span className='font-medium text-sm'>Toss:</span> {livedata?.response.match_info.toss.text}</p>




                </div>





                {/* <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' /> */}
            </div>

            <div className='flex gap-x-8 w-full'>

                <div className='border mb-4 bg-white rounded-xl lg:w-3/4 w-full'>

                    <div className="w-full max-w-4xl mx-auto mt-8">

                        {/* Tab Buttons */}
                        <div className="relative overflow-x-scroll scrollbar-hide gap-2 flex-shrink-0 flex px-3">
                            {/* Render each tab button */}
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab}
                                    className={`md:w-1/5 w-1/3  gap-2 flex-shrink-0 text-center py-2 text-lg font-normal ${activeTab === tab ? "text-black" : "text-gray-500"
                                        }`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}

                            {/* Underline */}
                            <div
                                className="absolute md:w-1/5 w-1/3   bottom-0 h-1 bg-blue-800 transition-transform duration-300 ease-in-out rounded-lg"
                                style={{
                                    //   width:"20%",
                                    // width: `${100 / tabs.length}%`, // The underline width is dynamically set based on the number of tabs
                                    transform: `translateX(${activeIndex * 100}%)`, // Move underline based on the active tab index
                                }}
                            ></div>
                        </div>

                        {/* Content Sections */}
                        <div className="relative mt-6 mb-6  px-3">
                            {activeTab === "commentary" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Commentary data={livedata} balldata={ballevent} />
                                </div>
                            )}

                            {activeTab === "scorecard" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Scorecard data={livedata} />
                                </div>
                            )}


                            {activeTab === "info" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Info data={livedata} />
                                </div>
                            )}

                            {activeTab === "squad" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Squad data={livedata} />
                                </div>
                            )}

                            {activeTab === "highlights" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Highlights />
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

export default MatchDetailView
