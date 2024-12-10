import React, { useEffect, useState } from 'react'
import DownloadApp from './DownloadApp'
import TopRankings from './TopRankings'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const HomePopularSeries = () => {


    const [complete, setComplete] = useState([])
    const backUrl = process.env.REACT_APP_BACK_URL
    const {t} = useTranslation()



    useEffect(() => {
        axios.get(`${backUrl}/api/v1/homedata`)
            .then((res) => {

                console.log(res);
                const dataFromApi = res.data.response.items
                const filteredData = dataFromApi.filter(item => item.status_str
                    === 'Live' && (item.competition.category === "international" || item.competition.category === "women" || item.competition.title === "Abu Dhabi T10 League"));


                // setLivematch(filteredData)
                // item.competition.category === ""||

                console.log(filteredData, "filtrr")


                const upcomingMatch = dataFromApi.filter(item => item.status_str === "Scheduled" && (item.competition.category === "international" || item.competition.category === "women" || item.competition.title === "Abu Dhabi T10 League"));
                console.log(upcomingMatch, "uppp")

                // setSchedule(upcomingMatch)


                const completedMatch = dataFromApi.filter(item => item.status_str === "Completed" && (item.competition.category === "international" || item.competition.category === "women" || item.competition.title === "Abu Dhabi T10 League"));
                console.log(completedMatch, "compled")


                const topdata = ([...filteredData, ...upcomingMatch, ...completedMatch]);

                console.log(topdata, "cccc")
                setComplete(topdata)








                // console.log(filteredData, "ressss");
            })

        console.log("top useefect hit")
    }, [])
    const formatUrl = (text) => {
        return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
    };


    return (
        <div> <div class="md:w-72 md:block text-blue-950   w-full mx-auto md:mx-0   ">

            <div class="grid items-center md:justify-between space-y-6 pb-3  ">

                <div class="grid  w-full top-0 rounded-xl px-3 py-3 border dark:border-none bg-white dark:bg-gray-800 dark:text-white  overflow-hidden ">
                    <span className='text-2xl font-medium'>{t("POPULAR SERIES")}</span>

                    <div class="flex items-center justify-between pb-3 pt-3  last:pb-0">
                        <div class="grid items-center gap-x-3 ">

                            {[...new Map(
                                complete.map((item) => [item.competition.title, item])
                            ).values()].map((item, index) => (
                                item.competition.title ? (
                                    <Link
                                        to={`cricket-series/${item.competition.cid}/${formatUrl(item.competition.title)}/overview`}

                                        key={index}
                                        class="block border-b py-2.5 leading-relaxed tracking-normal antialiased hover:underline"
                                    >
                                        {item.competition.title}
                                    </Link>
                                ) : ""
                            ))}





                        </div>
                    </div>

                    <Link to="cricket-series" class=" items-center text-gray-700 text-center  justify-between block tracking-normal antialiased hover:underline ">
                        {t("Show More")}
                    </Link>



                </div>





                <DownloadApp />
                {/* <TopRankings /> */}












            </div>

        </div></div>
    )
}

export default HomePopularSeries;