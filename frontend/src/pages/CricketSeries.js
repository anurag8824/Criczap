import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FbConnect from '../components/FbConnect'
import SeriesFilter from '../components/SeriesFilter';
import YearFilter from '../components/YearFilter';
import axios from "axios"

const CricketSeries = () => {
    const [activeTab, setActiveTab] = useState("current");
    const backUrl = process.env.REACT_APP_BACK_URL
    const [rdata, setRdata] = useState([])
    const [live, setLive] = useState([])
    const [next, setNext] = useState([])
    // const [international,setIn]


    const [idata, setIdata] = useState([])
    const [domdata, setDomdata] = useState([])
    const [tdata, setTdata] = useState([])
    const [dataFromChild, setDataFromChild] = useState(null);



    const handleTabClick = (tab) => {
        setActiveTab(tab);

    };

    useEffect(() => {
        axios.get(`${backUrl}/api/v1/match/list`).then((res) => {
            console.log(res, "seresis list");

            const comingseries = res.data.fixtureMatches;
            setNext(comingseries)

            const liveseries = res.data.liveMatches;
            setLive(liveseries);

            const result = res.data.resultMatches;
            setRdata(result)



            const intnextData = comingseries.filter(item => item.category === "international");
            const intLData = liveseries.filter(item => item.category === "international");
            const intRData = result.filter(item => item.category === "international");

            setIdata([...intnextData.reverse(), ...intLData.reverse(), ...intRData.reverse()]);


            const dnextData = comingseries.filter(item => item.category === "domestic");
            const dLData = liveseries.filter(item => item.category === "domestic");
            const dRData = result.filter(item => item.category === "domestic");

            setDomdata([...dnextData.reverse(), ...dLData.reverse(), ...dRData.reverse()])


            const tnextData = comingseries.filter(item => item.game_format === "t20" || item.game_format === "t20i");
            const tLData = liveseries.filter(item => item.game_format === "t20" || item.game_format === "t20i");
            const tRData = result.filter(item => item.game_format === "t20" || item.game_format === "t20i");

            setTdata([...tnextData.reverse(), ...tLData.reverse(), ...tRData.reverse()]);






        })
    }, [])

    const handleDataFromChild = (data) => {
        setDataFromChild(data);  // Update state with the data received from child
    };




    return (
        <div className='md:mx-20 mx-4 '>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>Seasons/Series</p>
                {/* <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' /> */}
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full'>

                    <div className="w-full max-w-4xl mx-auto mt-8">
                        {/* Tab Buttons */}
                        <div className="relative flex gap-4 px-3">
                            <button
                                className={`w-1/3 text-center py-2 text-lg font-normal ${activeTab === "current" ? "text-black" : "text-black"
                                    }`}
                                onClick={() => handleTabClick("current")}
                            >
                                Current & Future Series
                            </button>
                            <button
                                className={`w-1/3 text-center py-2  text-lg font-normal ${activeTab === "archive" ? "text-black" : "text-black"
                                    }`}
                                onClick={() => handleTabClick("archive")}
                            >
                                Series Archive
                            </button>

                            {/* Underline */}
                            <div
                                className={`absolute bottom-0  rounded-lg h-1 bg-blue-800 transition-transform duration-300 ease-in-out ${activeTab === "current" ? "translate-x-0" : "translate-x-full"
                                    }`}
                                style={{ width: "33.33%" }}
                            ></div>
                        </div>

                        {activeTab === "current" ? <SeriesFilter sendDataToParent={handleDataFromChild} /> : null}
                        {activeTab === "archive" ? <YearFilter /> : null}




                        {/* Content Sections */}
                        <div className="relative mt-6  px-3">

                            {activeTab === "current" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">

                                    {/* table starts cuuret  */}

                                    <div class="relative  overflow-x-auto ">
                                        <table class=" text-sm w-full text-left rtl:text-right text-white ">
                                            <thead class="text-lg font-medium bg-blue-950   ">
                                                <tr>
                                                    <th scope="col" class="px-6 w-96 py-3">
                                                        Month
                                                    </th>
                                                    <th scope="col" class="px-6 w-full py-3">
                                                        Series Name
                                                    </th>

                                                </tr>
                                            </thead>

                                            <tbody>



                                                {dataFromChild == null ? (
                                                    idata?.map((item, index) => (
                                                        item ? (
                                                            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                                                <th scope="row" className="text-blue-900 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                                    {new Date(item.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                                                                </th>
                                                                <td className="list-none w-full py-2.5 text-black">
                                                                    <li className="md:pl-6 md:pr-2 py-2 px-1 grid">
                                                                        <Link to="overview" className="text-sm font-medium hover:underline">{item.title}</Link>
                                                                        <span className="text-gray-500">{item.datestart + " to " + item.dateend}</span>
                                                                    </li>
                                                                </td>
                                                            </tr>
                                                        ) : null
                                                    ))
                                                ) : dataFromChild === "T20" ? (
                                                    tdata?.map((item, index) => (
                                                        item ? (
                                                            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                                                <th scope="row" className="text-blue-900 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                                    {new Date(item.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                                                                </th>
                                                                <td className="list-none w-full py-2.5 text-black">
                                                                    <li className="md:pl-6 md:pr-2 py-2 px-1 grid">
                                                                        <Link to="overview" className="text-sm font-medium hover:underline">{item.title}</Link>
                                                                        <span className="text-gray-500">{item.datestart + " to " + item.dateend}</span>
                                                                    </li>
                                                                </td>
                                                            </tr>
                                                        ) : null
                                                    ))
                                                ) :  domdata?.map((item, index) => (
                                                    item ? (
                                                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                                            <th scope="row" className="text-blue-900 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                                {new Date(item.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                                                            </th>
                                                            <td className="list-none w-full py-2.5 text-black">
                                                                <li className="md:pl-6 md:pr-2 py-2 px-1 grid">
                                                                    <Link to="overview" className="text-sm font-medium hover:underline">{item.title}</Link>
                                                                    <span className="text-gray-500">{item.datestart + " to " + item.dateend}</span>
                                                                </li>
                                                            </td>
                                                        </tr>
                                                    ) : null
                                                ))}



                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            )}



                            {activeTab === "archive" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    {/* table starts archived  */}

                                    <div class="relative  overflow-x-auto ">
                                        <table class=" text-sm w-full text-left rtl:text-right text-white ">
                                            <thead class="text-lg font-medium bg-blue-950   ">
                                                <tr>
                                                    <th scope="col" class="px-6 w-96 py-3">
                                                        Month
                                                    </th>
                                                    <th scope="col" class="px-6 w-full py-3">
                                                        Series Name
                                                    </th>

                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr class="border-b border-gray-200 dark:border-gray-700">

                                                    <th scope="row" class=" text-blue-900 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                        October 2024
                                                    </th>




                                                    <td class="list-none w-full  py-2.5 text-black">

                                                        <li class="md:pl-6 md:pr-2 py-2  px-1  grid">
                                                            <Link to="overview" className=' text-sm font-medium hover:underline'>India tour of England 2025</Link>
                                                            <span className='text-gray-500'>21 Nov - 08 Jan 2026</span>
                                                        </li>











                                                    </td>


                                                </tr>


                                                <tr class="border-b border-gray-200 dark:border-gray-700">

                                                    <th scope="row" class=" text-blue-800 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                        December 2024
                                                    </th>




                                                    <td class="list-none py-2.5  text-black">

                                                        <li class="md:pl-6 md:pr-2 py-2 px-1   grid">
                                                            <Link to="overview" className='  text-sm font-medium hover:underline'>India tour of England 2025</Link>
                                                            <span className='text-gray-500'>21 Nov - 08 Jan 2026</span>
                                                        </li>



                                                        <li class="md:pl-6 md:pr-2 py-2  px-1  grid">
                                                            <Link to="overview" className='  text-sm font-medium hover:underline'>India tour of England 2025</Link>
                                                            <span className='text-gray-500'>21 Nov - 08 Jan 2026</span>
                                                        </li>









                                                    </td>


                                                </tr>




                                            </tbody>
                                        </table>
                                    </div>
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

export default CricketSeries