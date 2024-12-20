import React, { useEffect, useState } from 'react'
import FbConnect from '../components/FbConnect';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useTranslation } from 'react-i18next';

const CricketSchedule = () => {

    const [activeTab, setActiveTab] = useState("all");
    const [livematch, setLivematch] = useState([])
    const [schedule, setSchedule] = useState([])
    const [complete, setComplete] = useState([])
    const navigate = useNavigate();
    const backUrl = process.env.REACT_APP_BACK_URL


    // const scrollRef = useRef(null)

    const tabs = ["all", "scheduled"]

    const activeIndex = tabs.indexOf(activeTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/cricket-schedule`)

    };

    
    const formatUrl = (text) => {
        return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
    };



    useEffect(() => {

        axios.get(`${backUrl}/api/v1/homedata`)
            .then((res) => {

                console.log(res, "cvcvcvvccvcv");

                const dataFromApi = res.data.matches
                const filteredData = dataFromApi.filter(item => item.status_str
                    === 'Live' && (item.competition.category === "international" || item.competition.category === "women"));


                // setLivematch(filteredData)
                // item.competition.category === ""||

                // console.log(filteredData, "filtrr")


                const upcomingMatch = dataFromApi.filter(item => item.status_str === "Scheduled" && (item.competition.category === "international" || item.competition.category === "women"));
                console.log(upcomingMatch, "uppp")

                setSchedule(upcomingMatch)


                const completedMatch = dataFromApi.filter(item => item.status_str === "Completed" && (item.competition.category === "international" || item.competition.category === "women"));
                console.log(completedMatch, "compled")

                setComplete([...filteredData, ...completedMatch])









                // console.log(filteredData, "ressss");
            }).catch((err) => {
                console.log(err, "errror")
            })


    }, [])

    const {t} = useTranslation()



    return (
        <div className='md:mx-20 mx-4 '>

            {/* <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>India tour of England 2025</p>
                <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div> */}

            <div className='flex py-10 gap-x-8'>
                <div className='border mb-4 bg-white dark:bg-gray-800 dark:border-none  rounded-xl md:w-3/4 w-full'>



                    <div className="w-full max-w-4xl mx-auto mt-8">


                        {/* Tab Buttons */}
                        <div className="relative overflow-x-scroll scrollbar-hide gap-2 flex-shrink-0 flex px-3">




                            {/* Render each tab button */}
                            {tabs.map((tab, index) => (
                                <button

                                    key={tab}
                                    className={` w-1/3  gap-2 flex-shrink-0 text-center py-2 text-lg font-normal ${activeTab === tab ? "text-black dark:text-white" : "text-gray-500"
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
                                className="absolute   bottom-0 h-1 bg-blue-950 transition-transform duration-300 ease-in-out rounded-lg"
                                style={{
                                    width: "33.33%",
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

                            {activeTab === `all` && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    {/* content starts  */}
                                    {complete ?
                                        <div>
                                            <div class="relative  overflow-x-auto ">


                                                <table class="  w-full text-left rtl:text-right  ">
                                                    <thead class=" bg-gray-100 dark:bg-gray-700 dark:text-white text-blue-950   ">
                                                        <th scope="col" class="px-6 hidden md:block w-1/3 py-3">
                                                            {t("Date")}
                                                        </th>
                                                        <th scope="col" class="px-6  w-full py-3">
                                                            {t("Match Details")}
                                                        </th>

                                                    </thead>

                                                    <tbody>

                                                        {complete?.map((item, index) => (
                                                            item ? (
                                                                <tr key={index} class="border-b dark:text-white text-blue-950  border-gray-200 dark:border-gray-700">

                                                                    <th scope="row" className="  hidden md:block font-medium text-lg  align-text-top py-3 px-3 whitespace-nowrap">
                                                                        {new Date(item.competition?.datestart).toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                                    </th>




                                                                    <td class="list-none py-2.5 ">
                                                                        {/* <li className='px-6'>{new Date(item.competition?.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}</li> */}
                                                                        <li class="px-6 py-1  grid">
                                                                            <Link to={`/match-detail/${item.match_id}/${formatUrl(`${item.short_title}-${item.competition.title}`)}/commentary`} className='font-medium text-base hover:underline'>
                                                                                {item.competition?.title}, {item?.subtitle} </Link>
                                                                            <span className=''>    {item.date_start_ist}</span>

                                                                            <span>{item.venue?.location},{item.venue?.country}</span>
                                                                        </li>


                                                                        <li class="px-6 py-1  grid">
                                                                            <Link to={`/match-detail/${item.match_id}/${formatUrl(`${item.short_title}-${item.competition.title}`)}/commentary`} className=' md:w-full w-72 items-center grid grid-rows-2 gap-y-2 px-3 py-2 justify-start dark:bg-gray-700 bg-gray-200'>


                                                                                <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                                                                    <div class="flex items-center gap-x-3">
                                                                                        <img
                                                                                            src={item.teama?.logo_url}
                                                                                            alt="Tania Andrew"
                                                                                            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                                                        />
                                                                                        <div>
                                                                                            <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                                {item.teama?.short_name}
                                                                                            </p>

                                                                                        </div>
                                                                                    </div>
                                                                                    <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                        {item.teama?.scores_full}

                                                                                    </p>
                                                                                </div>

                                                                                <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                                                                    <div class="flex items-center gap-x-3">
                                                                                        <img
                                                                                            src={item.teamb?.logo_url}
                                                                                            alt="Tania Andrew"
                                                                                            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                                                        />
                                                                                        <div>
                                                                                            <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                                {item.teamb?.short_name}
                                                                                            </p>

                                                                                        </div>
                                                                                    </div>
                                                                                    <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                        {item.teamb?.scores_full}

                                                                                    </p>
                                                                                </div>




                                                                                <p className='text-red-500 text-sm'>{item.status_note}</p>





                                                                            </Link>
                                                                        </li>








                                                                    </td>


                                                                </tr>

                                                            ) : <div className="flex  justify-center ">
                                                                <div className="w-4 h-4 border-2 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
                                                            </div>
                                                        ))}














                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                        : <div className="flex  justify-center ">
                                            <div className="w-4 h-4 border-2 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
                                        </div>}

                                </div>
                            )}






                            {activeTab === `scheduled` && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    {/* content starts  */}
                                    {schedule ?
                                        <div class="relative  overflow-x-auto ">



                                            <table class="  w-full text-left rtl:text-right  ">
                                                <thead class=" bg-gray-100 dark:bg-gray-700 dark:text-white   ">
                                                    <th scope="col" class="px-6 hidden md:block w-1/3  py-3">
                                                        {t("Date")}
                                                    </th>
                                                    <th scope="col" class="px-6 w-full py-3">
                                                        {t("Match Details")}
                                                    </th>

                                                </thead>

                                                <tbody>

                                                    {schedule?.map((item, index) => (
                                                        item ? (
                                                            <tr key={index} class="border-b dark:text-white text-blue-950  border-gray-200 dark:border-gray-700">

                                                                    <th scope="row" className="  hidden md:block font-medium text-lg  align-text-top py-3 px-3 whitespace-nowrap">
                                                                        {new Date(item.competition?.datestart).toLocaleString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                                    </th>




                                                                    <td class="list-none py-2.5 ">
                                                                        {/* <li className='px-6'>{new Date(item.competition?.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}</li> */}
                                                                        <li class="px-6 py-1  grid">
                                                                            <Link to={`/match-detail/${item.match_id}/${formatUrl(`${item.short_title}-${item.competition.title}`)}/commentary`} className='font-medium text-base hover:underline'>
                                                                                {item.competition?.title}, {item?.subtitle} </Link>
                                                                            <span className=''>    {item.date_start_ist}</span>

                                                                            <span>{item.venue?.location},{item.venue?.country}</span>
                                                                        </li>


                                                                        <li class="px-6 py-1  grid">
                                                                            <Link to={`/match-detail/${item.match_id}/${formatUrl(`${item.short_title}-${item.competition.title}`)}/commentary`} className=' md:w-full w-72 items-center grid grid-rows-2 gap-y-2 px-3 py-2 justify-start dark:bg-gray-700 bg-gray-200'>


                                                                                <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                                                                    <div class="flex items-center gap-x-3">
                                                                                        <img
                                                                                            src={item.teama?.logo_url}
                                                                                            alt="Tania Andrew"
                                                                                            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                                                        />
                                                                                        <div>
                                                                                            <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                                {item.teama?.short_name}
                                                                                            </p>

                                                                                        </div>
                                                                                    </div>
                                                                                    <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                        {item.teama?.scores_full}

                                                                                    </p>
                                                                                </div>

                                                                                <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                                                                    <div class="flex items-center gap-x-3">
                                                                                        <img
                                                                                            src={item.teamb?.logo_url}
                                                                                            alt="Tania Andrew"
                                                                                            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                                                        />
                                                                                        <div>
                                                                                            <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                                {item.teamb?.short_name}
                                                                                            </p>

                                                                                        </div>
                                                                                    </div>
                                                                                    <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                        {item.teamb?.scores_full}

                                                                                    </p>
                                                                                </div>




                                                                                <p className='text-red-500 text-sm'>{item.status_note}</p>





                                                                            </Link>
                                                                        </li>








                                                                    </td>


                                                                </tr>

                                                        ) : <div className="flex  justify-center ">
                                                            <div className="w-4 h-4 border-2 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
                                                        </div>
                                                    ))}
















                                                </tbody>
                                            </table>


                                        </div>
                                        :
                                        <div className="flex  justify-center ">
                                            <div className="w-4 h-4 border-2 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    }
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

export default CricketSchedule