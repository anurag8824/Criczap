import React, { useEffect, useState } from 'react'

import FbConnect from "../components/FbConnect"
import axios from "axios"

import { Link, useParams } from 'react-router-dom'



const PlayerDetail = () => {

    const [pdata, setPdata] = useState()

    const Pid = useParams().id;
    console.log(Pid, "player id")
    const backUrl = process.env.REACT_APP_BACK_URL;


    useEffect(() => {
        axios.post(`${backUrl}/api/v1/playerinfo`, { playerid: Pid })
            .then((res) => {
                console.log(res, "player infoooo")
                const pdata = res.data.response;
                setPdata(pdata);
            })
    }, [])



    // console.log(pdata, "opppppdatat")


    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>Cricket Player Info</p>
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                    <div className=' md:p-8 p-2'>

                        <div class="md:flex  grid-cols-2 gap-x-12 pb-2.5 ">

                            {/* 1st portion  */}

                            <div className='md:w-1/4 w-full '>

                                <div className=' text-center'>
                                    <img
                                        src={pdata?.player?.logo_url ? pdata?.player?.logo_url : "/demoplayer.png"}

                                        alt="Tania Andrew"
                                        class="relative border inline-block h-full w-72 md:w-full rounded-full object-cover object-center"
                                    />

                                    <p className='text-lg font-medium'>{pdata?.player?.title}</p>
                                    <span>{pdata?.player?.nationality}</span>


                                </div>


                                <div className=' mt-6 mx-auto md:w-full'>
                                    <p className='text-lg font-medium'>Personal Information</p>

                                    <div className='mx-4 '>
                                        <p className='border-b w-full py-4'><strong>Born:</strong> {pdata?.player?.birthdate}</p>
                                        <p className='border-b py-4'><strong>Role:</strong> {pdata?.player?.playing_role}</p>
                                        <p className='border-b py-4'><strong>Batting Style:</strong> {pdata?.player?.batting_style}</p>
                                        <p className=' py-4'><strong>Bowling Style:</strong> {pdata?.player?.bowling_style}</p>


                                    </div>



                                </div>

                                <div className="mt-6 w-full">
                                    <p className="text-lg font-medium mb-4">Cricket Rankings</p>
                                    <div className="relative overflow-x-auto ">
                                        <table className="w-full text-sm text-center text-gray-900 bg-white dark:text-gray-300">
                                            <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-4 py-3 font-medium ">Type</th>
                                                    <th scope="col" className="px-4 py-3 font-medium ">Test</th>
                                                    <th scope="col" className="px-4 py-3 font-medium ">ODI</th>
                                                    <th scope="col" className="px-4 py-3 font-medium ">T20</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b bg-white text-center dark:bg-gray-800 dark:border-gray-700">
                                                    <td className="px-4 py-3 font-medium">All</td>
                                                    <td className="px-4 py-3">22</td>
                                                    <td className="px-4 py-3">44</td>
                                                    <td className="px-4 py-3">44</td>
                                                </tr>
                                                <tr className="border-b bg-white text-center dark:bg-gray-800 dark:border-gray-700">
                                                    <td className="px-4 py-3 font-medium">Batting</td>
                                                    <td className="px-4 py-3">44</td>
                                                    <td className="px-4 py-3">2</td>
                                                    <td className="px-4 py-3">2</td>
                                                </tr>
                                                <tr className="border-b bg-white text-center dark:bg-gray-800 dark:border-gray-700">
                                                    <td className="px-4 py-3 font-medium">Bowling</td>
                                                    <td className="px-4 py-3">44</td>
                                                    <td className="px-4 py-3">2</td>
                                                    <td className="px-4 py-3">2</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                            </div>


                            {/* 2nd protion  */}
                            <div className='md:w-1/2'>

                                <div className='md:block hidden'>
                                    <p className='text-3xl font-medium'>{pdata?.player.title}</p>
                                </div>

                                <div className=' mt-6'>
                                    <p className='text-lg font-medium'>Batting Career Summary</p>
                                    <div className='mt-2 '>

                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-sm text-left text-gray-900 bg-white dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">Type</th>
                                                        <th scope="col" className="px-6 py-3">M</th>
                                                        <th scope="col" className="px-6 py-3">INN</th>
                                                        <th scope="col" className="px-6 py-3">NO</th>
                                                        <th scope="col" className="px-6 py-3">Runs</th>
                                                        <th scope="col" className="px-6 py-3">HS</th>
                                                        <th scope="col" className="px-6 py-3">Avg</th>
                                                        <th scope="col" className="px-6 py-3">SR</th>
                                                        <th scope="col" className="px-6 py-3">100s</th>
                                                        <th scope="col" className="px-6 py-3">50s</th>
                                                        <th scope="col" className="px-6 py-3">4s</th>
                                                        <th scope="col" className="px-6 py-3">6s</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="px-6 py-4">ODI</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.matches}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.innings}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.notout}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.runs}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.highest}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.average}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.strike}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.run100}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.run50}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.run4}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.odi?.run6}</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="px-6 py-4">T20I</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.matches}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.innings}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.notout}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.runs}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.highest}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.average}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.strike}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.run100}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.run50}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.run4}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.t20i?.run6}</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="px-6 py-4">TEST</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.matches}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.innings}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.notout}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.runs}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.highest}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.average}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.strike}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.run100}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.run50}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.run4}</td>
                                                        <td className="px-6 py-4">{pdata?.batting?.test?.run6}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>



                                    </div>


                                </div>



                                <div className=' mt-6'>
                                    <p className='text-lg font-medium'>Bowling Career Summary</p>
                                    <div className='mt-2 '>

                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-sm text-left text-gray-900 bg-white dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">Type</th>
                                                        <th scope="col" className="px-6 py-3">M</th>
                                                        <th scope="col" className="px-6 py-3">INN</th>
                                                        <th scope="col" className="px-6 py-3">B</th>
                                                        <th scope="col" className="px-6 py-3">Runs</th>
                                                        <th scope="col" className="px-6 py-3">Wkts</th>
                                                        <th scope="col" className="px-6 py-3">BBI</th>
                                                        <th scope="col" className="px-6 py-3">BBM</th>
                                                        <th scope="col" className="px-6 py-3">Eco</th>
                                                        <th scope="col" className="px-6 py-3">Avg</th>
                                                        <th scope="col" className="px-6 py-3">5W</th>
                                                        <th scope="col" className="px-6 py-3">10W</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="px-6 py-4">ODI</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.matches}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.innings}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.balls}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.runs}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.wickets}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.bestinning}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.bestmatch}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.econ}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.average}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.wicket5i}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.odi?.wicket10m}</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="px-6 py-4">T20I</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.matches}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.innings}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.balls}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.runs}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.wickets}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.bestinning}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.bestmatch}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.econ}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.average}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.wicket5i}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.t20i?.wicket10m}</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700">
                                                        <td className="px-6 py-4">TEST</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.matches}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.innings}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.balls}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.runs}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.wickets}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.bestinning}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.bestmatch}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.econ}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.average}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.wicket5i}</td>
                                                        <td className="px-6 py-4">{pdata?.bowling?.test?.wicket10m}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>



                                    </div>


                                </div>





                                <div className=' mt-6 w-full'>
                                    <p className='text-lg font-medium'>Career Information</p>

                                    <div className='mx-4 '>
                                        <p className='border-b w-full py-4'><strong>Test debut:</strong>  vs Australia at Vidarbha Cricket Association Stadium</p>
                                        <p className='border-b py-4'><strong>ODI debut:</strong> vs Sri Lanka at R.Premadasa Stadium</p>
                                        <p className='border-b py-4'><strong>T20 debut: </strong> vs England at Narendra Modi Stadium</p>
                                        <p className=' py-4'><strong>IPL debut:</strong>  vs Pune Warriors at Wankhede Stadium</p>


                                    </div>



                                </div>

                                <div className=' mt-6 w-full'>
                                    <p className='text-lg font-medium'>About Suryakumar Yadav</p>

                                    <div className=''>
                                        <p className='border-b w-full py-4'>   vs Australia at Vidarbha Cricket Association Stadium</p>





                                    </div>



                                </div>


                            </div>



                        </div>

















                    </div>





                </div>

                <FbConnect />


            </div>


        </div>
    )
}

export default PlayerDetail