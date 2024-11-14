import React, { useEffect, useState } from 'react'
import DownloadApp from './DownloadApp'
import TopRankings from './TopRankings'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePopularSeries = () => {


    const [livematch, setLivematch] = useState([])
    const [schedule, setSchedule] = useState([])
    const [complete, setComplete] = useState([])
    const [popular , setPopular] = useState([])
    const backUrl = process.env.REACT_APP_BACK_URL
    console.log("componet in mounting")

    useEffect(() => {
       console.log("componet in mounting useEffect")

        try {
            axios.get(`${backUrl}/api/v1/popular`)
                .then((res) => {
    
                    console.log(res,"poppps");
    
                    const dataFromApi = res.data.response.items
                    const filteredData = dataFromApi.filter(item => item.status_str
                        === 'Live' && (item.competition.category === "international" || item.competition.category === "women"));
    
    
                    setLivematch(filteredData)
                    // item.competition.category === ""||
    
                    // console.log(filteredData, "filtrr")
    
    
                    const upcomingMatch = dataFromApi.filter(item => item.status_str === "Scheduled" && (item.competition.category === "international" || item.competition.category === "women"));
                    // console.log(upcomingMatch, "uppp")
    
                    setSchedule(upcomingMatch)
    
    
                    const completedMatch = dataFromApi.filter(item => item.status_str === "Completed" && (item.competition.category === "international" || item.competition.category === "women"));
                    // console.log(completedMatch, "compled")
    
                    setComplete(completedMatch)
    
                    setPopular([...filteredData, ...upcomingMatch, ...completedMatch])
    
                    console.log(popular, "popular series ")
    
    
    
    
    
    
    
    
    
    
    
                    // console.log(filteredData, "ressss");
                }).catch((error)=>{
                    console.log(error,"errro")
                })
        } catch (error) {
            console.log(error,"errro");
        }
               
            

    },[backUrl])


    return (
        <div> <div class="md:w-72 md:block text-blue-950 w-full mx-auto md:mx-0   ">

            <div class="grid items-center md:justify-between space-y-6 pb-3  ">

                <div class="grid  w-full top-0 rounded-xl px-3 py-3 border bg-white  overflow-hidden ">
                    <span className='text-2xl font-medium'>POPULAR SERIES</span>

                    <div class="flex items-center justify-between pb-3 pt-3  last:pb-0">
                        <div class="grid items-center gap-x-3 ">




                            <div class=" block border-b py-2.5 leading-relaxed tracking-normal antialiased hover:underline">Nepal tour of United States of America 2024</div>



                            <div class="block border-b py-2.5  leading-relaxed tracking-normal antialiased hover:underline">Womens T20 World Cup 2024 🏆</div>



                            <div class="block border-b py-2.5  leading-relaxed tracking-normal antialiased hover:underline">Womens T20 World Cup 2024 🏆</div>
                        </div>
                    </div>

                    <Link to="cricket-series" class=" items-center text-gray-700 text-center  justify-between block tracking-normal antialiased hover:underline ">
                        Show More
                    </Link>



                </div>





                <DownloadApp />
                {/* <TopRankings /> */}












            </div>

        </div></div>
    )
}

export default HomePopularSeries;