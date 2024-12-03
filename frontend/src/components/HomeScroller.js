
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import HomeScrollCard from './HomeScrollCard'


const HomeScroller = () => {
    const [livematch, setLivematch] = useState([])
    const [filter, setFilter] = useState('all'); // State to control what to display

    const [schedule, setSchedule] = useState([])
    const [complete, setComplete] = useState([])
    const backUrl = process.env.REACT_APP_BACK_URL

    useEffect(() => {

        axios.get(`${backUrl}/api/v1/homedata`)
            .then((res) => {

                console.log(res);
                const dataFromApi = res.data.response.items
                const filteredData = dataFromApi.filter(item => item.status_str
                    === 'Live' && (item.competition.category === "international" || item.competition.category === "women" || item.competition.title === "Abu Dhabi T10 League"));


                setLivematch(filteredData)
                // item.competition.category === ""||

                // console.log(filteredData, "filtrr")


                const upcomingMatch = dataFromApi.filter(item => item.status_str === "Scheduled" && (item.competition.category === "international" || item.competition.category === "women" || item.competition.title === "Abu Dhabi T10 League"));
                console.log(upcomingMatch, "uppp")

                setSchedule(upcomingMatch)


                const completedMatch = dataFromApi.filter(item => item.status_str === "Completed" && (item.competition.category === "international" || item.competition.category === "women" || item.competition.title === "Abu Dhabi T10 League"));
                console.log(completedMatch, "compled")

                setComplete(completedMatch)








                // console.log(filteredData, "ressss");
            })

    }, [])



    return (


        <div>
            {livematch ?
                <>

                    <div className="flex">
                        <button
                            type="button"
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-950 rounded-lg border border-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={() => setFilter('all')} // Set filter to "all"
                        >
                            All
                        </button>

                        <button
                            type="button"
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            onClick={() => setFilter('live')} // Set filter to "live"
                        >
                            Live ({livematch.length})
                        </button>
                    </div>


                    <div className='md:flex md:space-x-4 md:overflow-x-scroll mx-auto custom-scrollbar overflow-x-hidden'>

                        {filter === 'all' && (
                            <>
                                {livematch.length > 0 && <HomeScrollCard data={livematch} />}



                                {schedule.length > 0 && <HomeScrollCard data={schedule} />}
                                {complete.length > 0 && <HomeScrollCard data={complete} />}

                                {livematch.length === 0 && schedule.length === 0 && complete.length === 0 && (
                                    <p className="text-red-500 font-medium text-center mt-4">No match found</p>
                                )}
                            </>
                        )}
                        {filter === 'live' && (
                            livematch.length > 0 ? (
                                <HomeScrollCard data={livematch} />
                            ) : (
                                <p className="text-red-500 font-medium  text-center mt-4">No Live match found</p>
                            )
                        )}





                    </div>


                </>

                : "fg"}



        </div>
    )
}

export default HomeScroller