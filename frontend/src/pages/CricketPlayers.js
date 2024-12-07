import React, { useContext, useEffect, useState } from 'react'
import FbConnect from "../components/FbConnect"
import axios from "axios"
import { Link } from 'react-router-dom'

const CricketPlayers = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const backUrl = process.env.REACT_APP_BACK_URL;
    console.log("p hit")

    useEffect(() => {
        axios.get(`${backUrl}/api/v1/allplayer`)
            .then((res) => {
                console.log(res, "allplayers");
                setData(res.data.msg.items)
            }).catch((err) => {
                console.error("Error fetching players data", err);
            })
    }, []);

    const handleSearch = () => {
        axios.post(`${backUrl}/api/v1/searchplayer`, { search })
            .then((res) => {
                console.log(res, "send serach");
                setData(res.data.msg.items)
            })
    }

    const formatUrl = (text) => {
        return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
    };


    const TopPlayer = [
        {

            title: "Suryakumar Yadav",
            nationality: "India",
            pid:"598"
        },

        {
            title: "Philip Salt",
            nationality: "England",
            pid: "49818"
        }, {
            title: "Mohammad Rizwan",
            nationality: "Pakistan",
            pid: "44054"
        }, {
            title: "Yashasvi Jaiswal",
            nationality: "India",
            pid: "94184"
        }, {
            title: "Glenn Phillips",
            nationality: "New Zealand",
            pid: "1082"
        }, {
            title: "Babar Azam",
            nationality: "Pakistan",
            pid: "43371"
        },

        {
            title: "Jos Buttler",
            nationality: "England",
            pid: "105"
        },

        {
            title: "Virat Kohli",
            nationality: "India",
            pid: "119"
        },

        {
            title: "Kane Williamson",
            nationality: "New Zealand",
            pid: "31"
        },
        {
            title: "Aiden Markram",
            nationality:"South Africa",
            pid:"46117"
        }





    ]

    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl dark:text-white  font-medium'>Cricket Players</p>
                <input

                    onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            handleSearch();
                        }
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                    className=' bg-white dark:text-black rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div>


            <div className='flex gap-x-8'>

                {/* {data ? */}

                <div className='border mb-4 bg-white dark:text-white dark:border-none dark:bg-gray-800 rounded-xl md:w-3/4 w-full h-full'>
                    <div className='grid gap-y-2.5 grid-flow-row p-8'>

                    {TopPlayer?.map((item, index) => (
                            item ? (




                                <div key={index} class="flex gap-4 border-b pb-2.5 items-center">
                                    <img
                                        src="/demoplayer.png"
                                        alt="Tania Andrew"
                                        class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                                    />

                                    <p class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                        <Link
                                            to={`/cricket-player-detail/${item.pid}/${(formatUrl(item.title))}`}

                                            className='cursor-pointer hover:underline'>{item.title}</Link>
                                        <span>{item.nationality}</span>
                                    </p>
                                </div>

                            ) : null
                        ))}


                        {data?.map((item, index) => (
                            item ? (




                                <div key={index} class="flex gap-4 border-b pb-2.5 items-center">
                                    <img
                                        src="/demoplayer.png"
                                        alt="Tania Andrew"
                                        class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                                    />

                                    <p class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                        <Link
                                            to={`/cricket-player-detail/${item.pid}/${(formatUrl(item.title))}`}

                                            className='cursor-pointer hover:underline'>{item.title}</Link>
                                        <span>{item.nationality}</span>
                                    </p>
                                </div>

                            ) : null
                        ))}

                    </div>
                </div>

                {/* : <div className="flex  justify-center ">
                        <div className="w-4 h-4 border-2 border-blue-500 border-solid border-t-transparent rounded-full animate-spin">o</div>
                    </div>} */}

                <FbConnect />


            </div>




        </div>
    )
}

export default CricketPlayers