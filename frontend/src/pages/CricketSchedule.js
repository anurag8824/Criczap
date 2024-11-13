import React, { useEffect, useState } from 'react'
import FbConnect from '../components/FbConnect';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const CricketSchedule = () => {

    const [activeTab, setActiveTab] = useState("all");
    // const [livematch, setLivematch] = useState([])
    const [schedule, setSchedule] = useState([])
    const [complete, setComplete] = useState([])
    const navigate = useNavigate();


    // const scrollRef = useRef(null)

    const tabs = ["all", "scheduled"]

    const activeIndex = tabs.indexOf(activeTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/cricket-schedule`)

    };



    useEffect(() => {

        axios.get('https://rest.entitysport.com/exchange/matches/?token=91e89bd6c7b1f611304ba0f6faf45fd3&date=2024-11-11_2024-11-14&timezone=+5:30&&paged=1&per_page=100')
            .then((res) => {

                console.log(res, "cvcvcvvccvcv");

                const dataFromApi = res.data.response.items
                // const filteredData = dataFromApi.filter(item => item.status_str
                //     === 'Live' && (item.competition.category === "international" || item.competition.category === "women"));


                // setLivematch(filteredData)
                // item.competition.category === ""||

                // console.log(filteredData, "filtrr")


                const upcomingMatch = dataFromApi.filter(item => item.status_str === "Scheduled" && (item.competition.category === "international" || item.competition.category === "women"));
                console.log(upcomingMatch, "uppp")

                setSchedule(upcomingMatch)


                const completedMatch = dataFromApi.filter(item => item.status_str === "Completed" && (item.competition.category === "international" || item.competition.category === "women"));
                console.log(completedMatch, "compled")

                setComplete(completedMatch)









                // console.log(filteredData, "ressss");
            }).catch((err) => {
                console.log(err, "errror")
            })


    }, [])

    return (
        <div className='md:mx-20 mx-4 '>

            {/* <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>India tour of England 2025</p>
                <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div> */}

            <div className='flex py-10 gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full'>



                    <div className="w-full max-w-4xl mx-auto mt-8">


                        {/* Tab Buttons */}
                        <div className="relative overflow-x-scroll scrollbar-hide gap-2 flex-shrink-0 flex px-3">




                            {/* Render each tab button */}
                            {tabs.map((tab, index) => (
                                <button

                                    key={tab}
                                    className={` w-1/3  gap-2 flex-shrink-0 text-center py-2 text-lg font-normal ${activeTab === tab ? "text-black" : "text-gray-500"
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
                                className="absolute   bottom-0 h-1 bg-blue-800 transition-transform duration-300 ease-in-out rounded-lg"
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
                                                    <thead class=" bg-gray-100   ">
                                                        <th scope="col" class="px-6 w-96 py-3">
                                                            Date
                                                        </th>
                                                        <th scope="col" class="px-6 w-full py-3">
                                                            Match Details
                                                        </th>

                                                    </thead>

                                                    <tbody>

                                                        {complete?.map((item, index) => (
                                                            item ? (
                                                                <tr key={index} class="border-b border-gray-200 dark:border-gray-700">

                                                                    <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 whitespace-nowrap">
                                                                        {new Date(item.competition?.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                                                                    </th>




                                                                    <td class="list-none py-2.5 text-blue-950">
                                                                        <li class="px-6 py-1  grid">
                                                                            <Link to="#" className='font-medium text-base hover:underline'>
                                                                                {item.competition?.title} </Link>
                                                                            <span className=''>    {item.date_start_ist}</span>

                                                                            <span>{item.venue?.location},{item.venue?.country}</span>
                                                                        </li>


                                                                        <li class="px-6 py-1  grid">
                                                                            <Link to={`/match-detail/${77369}/commentary`} className=' md:w-full w-72 items-center grid grid-rows-2 gap-y-2 px-3 py-2 justify-start bg-gray-200'>


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
                                                <thead class=" bg-gray-100   ">
                                                    <th scope="col" class="px-6 w-96 py-3">
                                                        Date
                                                    </th>
                                                    <th scope="col" class="px-6 w-full py-3">
                                                        Match Details
                                                    </th>

                                                </thead>

                                                <tbody>

                                                    {schedule?.map((item, index) => (
                                                        item ? (
                                                            <tr key={index} class="border-b border-gray-200 dark:border-gray-700">

                                                                <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 whitespace-nowrap">
                                                                    {new Date(item.competition?.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                                                                </th>




                                                                <td class="list-none py-2.5 text-blue-950">
                                                                    <li class="px-6 py-1  grid">
                                                                        <Link to="#" className='font-medium text-base hover:underline'>
                                                                            {item.competition?.title} </Link>
                                                                        <span className=''>    {item.date_start_ist}</span>

                                                                        <span>{item.venue?.location},{item.venue?.country}</span>
                                                                    </li>


                                                                    <li class="px-6 py-1  grid">
                                                                        <Link to={`/match-detail/${77369}/commentary`} className=' md:w-full w-72 items-center grid grid-rows-2 gap-y-2 px-3 py-2 justify-start bg-gray-200'>


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

                                                        ) :  <div className="flex  justify-center ">
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