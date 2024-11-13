import React from 'react'
import DownloadApp from './DownloadApp'
import TopRankings from './TopRankings'
import { Link } from 'react-router-dom'

const HomePopularSeries = () => {
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
                <TopRankings />












            </div>

        </div></div>
    )
}

export default HomePopularSeries