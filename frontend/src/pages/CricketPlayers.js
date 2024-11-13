import React, { useEffect, useState } from 'react'

import FbConnect from "../components/FbConnect"
import axios from "axios"
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

const CricketPlayers = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const backUrl = process.env.REACT_APP_BACK_URL;
    const location = useLocation();


    useEffect(() => {
        axios.get(`${backUrl}/api/v1/allplayer`)
            .then((res) => {
                console.log(res, "allplayers");
                setData(res.data.msg.items)
            })
    }, [])


    const handleSearch = () => {

        axios.post(`${backUrl}/api/v1/searchplayer`, { search })
            .then((res) => {
                console.log(res, "send serach");
                setData(res.data.msg.items)

            })

    }


    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>Cricket Players</p>
                <input

                    onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            handleSearch();
                        }
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                    className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div>


            <div className='flex gap-x-8'>

                {data ?

                    <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                        <div className='grid gap-y-2.5 grid-flow-row p-8'>

                            {data.map((item, index) => (
                                item ? (




                                    <div key={index} class="flex gap-4 border-b pb-2.5 items-center">
                                        <img
                                            src="/demoplayer.png"
                                            alt="Tania Andrew"
                                            class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                                        />

                                        <p class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                            <Link
                                                to={`/cricket-player-detail/${item.pid}`}

                                                className='cursor-pointer hover:underline'>{item.title}</Link>
                                            <span>{item.nationality}</span>
                                        </p>
                                    </div>

                                ) : null
                            ))}









                        </div>





                    </div>

                    : <div className="flex  justify-center ">
                        <div className="w-4 h-4 border-2 border-blue-500 border-solid border-t-transparent rounded-full animate-spin">o</div>
                    </div>}

                <FbConnect />


            </div>




        </div>
    )
}

export default CricketPlayers