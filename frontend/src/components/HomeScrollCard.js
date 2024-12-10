import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const HomeScrollCard = ({ data }) => {
    const formatUrl = (text) => {
        return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
    };
    const {t} = useTranslation()

    return (
        <div className='md:flex md:space-x-4'>



            {data.map((item, index) => (

                item ? (

                    <div key={index} class="relative flex-shrink-0 flex  md:w-96 flex-col text-blue-950   bg-clip-border">
                        <Link
                            to={`cricket-series/${item.competition.cid}/${formatUrl(item.competition.title)}/overview`}
                            class="block px-2 text-sm font-medium  py-2 truncate text-left dark:text-white  transition-all hover:underline"
                        >
                            {item.competition.title}
                        </Link>

                        <Link to={`match-detail/${item.match_id}/${formatUrl(`${item.short_title}-${item.competition.title}`)}/commentary`}>
                            <div class="px-4 py-2 pb-1 mb-2 bg-white dark:bg-gray-800 dark:text-white  items-center  h-56 grid shadow-sm rounded-xl">
                                <p class="block text-red-600 mb-1 text-sm font-bold antialiased">
                                    {item.
                                        status_str === "Live" ? <> <span class="animate-blink">●</span> {item.status_str} </> : ""}
                                </p>

                                <div class="mb-1 flex items-center justify-between">
                                    <p class="block font-sans  text-sm font-medium leading-snug tracking-normal  antialiased">
                                        {item.date_start_ist} ● {item.venue.location},{item.venue.country}
                                    </p>
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

                                            <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal  antialiased">
                                                {item.teama.short_name}
                                            </p>

                                        </div>
                                        <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal  antialiased">
                                            {item.teama.scores_full}
                                        </p>

                                    </div>

                                    <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
                                        <div class="flex items-center gap-x-3">
                                            <img
                                                src={item.teamb.logo_url
                                                }
                                                alt="John Micheal"
                                                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                            />

                                            <p class="block font-sans text-base  font-semibold leading-relaxed tracking-normal  antialiased">
                                                {item.teamb.short_name}
                                            </p>

                                        </div>
                                        <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal antialiased">
                                            {item.teamb.scores_full}
                                        </p>
                                    </div>

                                    <hr />


                                    <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
                                        <div class="flex  items-center gap-x-3">
                                            <Link to={`cricket-series/${item.competition.cid}/${formatUrl(item.competition.title)}/overview`} class="block font-sans text-sm font-medium leading-relaxed tracking-normal  antialiased hover:underline">
                                                {t("Series")}
                                            </Link>
                                            <Link to={`cricket-series/${item.competition.cid}/${formatUrl(item.competition.title)}/overview`} class="block font-sans text-sm font-medium leading-relaxed tracking-normal antialiased hover:underline">
                                                {t("Schedule")}
                                            </Link>
                                            <Link to='cricket-news' class="block font-sans text-sm font-medium leading-relaxed tracking-normal antialiased hover:underline">
                                                {t("News")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>


                        {item.status_str === "Scheduled" ? (
                            <p className="block mt-1 px-2 text-xs font-medium mb-2 text-left text-yellow-500 transition-all">
                                {t("Upcoming")}
                            </p>
                        ) : item.status_str === "Completed" ? (
                            <p className="block mt-1 px-2 text-xs font-medium mb-2 text-left text-green-500 transition-all">
                                {item.status_note}
                            </p>
                        ) : item.status_str === "Live" ? (
                            <p className="block mt-1 px-2 text-xs font-medium mb-2 text-left text-red-500 transition-all">
                                {item.status_note}
                            </p>
                        ) : ""}








                    </div>

                ) : null

            ))}




        </div>
    )
}

export default HomeScrollCard