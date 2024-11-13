import React from 'react'
import { Link } from 'react-router-dom'

const HomeScrollCard = ({ data }) => {
    return (
        <div className='md:flex md:space-x-4'>



            {data.map((item, index) => (

                item ? (

                    <div key={index} class="relative flex-shrink-0 flex  md:w-96 flex-col   bg-clip-border text-gray-700">
                        <Link
                            to="cricket-series/overview"
                            class="block px-2 text-sm font-medium  py-2 truncate text-left text-black transition-all hover:underline"
                        >
                            {item.competition.title}
                        </Link>

                        <a href={`match-detail/${item.match_id}/commentary`}>
                            <div class="px-4 py-2 pb-1 mb-2 bg-white  items-center  h-56 grid shadow-sm rounded-xl">
                                <p class="block text-red-600 mb-1 text-sm font-bold antialiased">
                                    {item.
                                        status_str === "Live" ? <> <span class="animate-blink">●</span> {item.status_str} </> : ""}
                                </p>

                                <div class="mb-1 flex items-center justify-between">
                                    <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-black antialiased">
                                        {item.date_start_ist} ● {item.venue.location},{item.venue.country}
                                    </h5>
                                </div>

                                <div className=''>
                                    <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
                                        <div class="flex items-center gap-x-3">
                                            <img
                                                src={item.teama.logo_url
                                                }
                                                alt="Tania Andrew"
                                                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                            />

                                            <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-900 antialiased">
                                                {item.teama.short_name}
                                            </h6>

                                        </div>
                                        <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-900 antialiased">
                                            {item.teama.scores_full}
                                        </h6>
                                    </div>

                                    <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
                                        <div class="flex items-center gap-x-3">
                                            <img
                                                src={item.teamb.logo_url
                                                }
                                                alt="John Micheal"
                                                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                            />

                                            <h6 class="block font-sans text-base  font-semibold leading-relaxed tracking-normal text-blue-900 antialiased">
                                                {item.teamb.short_name}
                                            </h6>

                                        </div>
                                        <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-900 antialiased">
                                            {item.teamb.scores_full}
                                        </h6>
                                    </div>

                                    <hr />
                                    <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
                                        <div class="flex text-black items-center gap-x-3">
                                            <Link to='cricket-series' class="block font-sans text-sm font-medium leading-relaxed tracking-normal  antialiased hover:underline">
                                                Series
                                            </Link>
                                            <Link to='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal antialiased hover:underline">
                                                Schedule
                                            </Link>
                                            <Link to='cricket-news' class="block font-sans text-sm font-medium leading-relaxed tracking-normal antialiased hover:underline">
                                                News
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>


                        {item.status_str === "Scheduled" ? (
                            <p className="block mt-1 px-2 text-xs font-medium mb-2 text-left text-yellow-500 transition-all">
                                Upcoming
                            </p>
                        ) : item.status_str === "Completed" ? (
                            <p className="block mt-1 px-2 text-xs font-medium mb-2 text-left text-green-500 transition-all">
                                {item.status_note}
                            </p>
                        ) : (
                            ""
                        )}








                    </div>

                ) : null

            ))}




        </div>
    )
}

export default HomeScrollCard