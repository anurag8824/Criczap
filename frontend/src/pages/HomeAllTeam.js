import React from 'react'
import { Link } from 'react-router-dom'

const HomeAllTeam = () => {

    const Topteam = [
        {

            name: "India",
            logo: "/ind.png",
            teamid: "25"
        },

        {
            name: "Australia",
            logo: "/aus.png",
            teamid: "5"
        }, {
            name: "England",
            logo: "/eng.png",
            teamid: "490"
        }, {
            name: "Afganistan",
            logo: "/afg.png",
            teamid: "498"
        }, {
            name: "Pakistan",
            logo: "/pak.png",
            teamid: "13"
        }, {
            name: "South Africa",
            logo: "/rsa.png",
            teamid: "19"
        },

        {
            name: "Bangladesh",
            logo: "/ban.png",
            teamid: "23"
        },

        {
            name: "Sri Lanka",
            logo: "/sl.png",
            teamid: "21"
        },

        {
            name: "West Indies",
            logo: "/wi.png",
            teamid: "17"
        }



    ]

    return (
        <div className=''>

            <div className='relative  bg-white grid grid-flow-col scrollbar-hide auto-cols-max gap-4 m-4 border rounded-2xl mx-auto py-2 px-4 overflow-x-auto'>

                {Topteam.map((item, index) => (
                    item ? (
                        <Link to={`/cricket-team-detail/${item.teamid}/home`} class="flex border rounded-full w-fit py-1 px-6  items-center gap-x-3 hover:bg-gray-100">
                            <img
                                src={item.logo}
                                alt="Tania Andrew"
                                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                            />

                            <p class="block font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                {item.name}
                            </p>
                        </Link>
                    ) : null
                ))}





            </div></div>
    )
}

export default HomeAllTeam