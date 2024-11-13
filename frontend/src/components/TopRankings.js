import React from 'react'
import { Link } from 'react-router-dom'

const TopRankings = () => {
    return (
        <div>  <div class="grid text-2xl font-medium w-full top-0 rounded-xl px-3 py-3 border bg-white  overflow-hidden ">
            Top Rankings

            <div>



                <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-4">
                    <img
                        src="batter.png"
                        alt="Tania Andrew"
                        class="relative inline-block h-10 w-8  object-center"
                    />
                    <div>
                        <p class="block  text-base font-medium leading-relaxed tracking-normal  antialiased">
                            No.1 Batter
                        </p>

                        <p class="block  text-base font-medium leading-relaxed tracking-normal text-blue-900 antialiased">
                            Rohit Sharma
                        </p>

                    </div>
                </div>


                <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-4">
                    <img
                        src="wicket.png"
                        alt="Tania Andrew"
                        class="relative inline-block h-10 w-8  object-center"
                    />
                    <div>
                        <p class="block  text-base font-medium leading-relaxed tracking-normal  antialiased">
                            No.1 Bowler
                        </p>

                        <p class="block  text-base font-medium leading-relaxed tracking-normal text-blue-900 antialiased">
                            Jasprit Bumrah
                        </p>

                    </div>
                </div>



                <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-4">
                    <img
                        src="cricket-ball.png"
                        alt="Tania Andrew"
                        class="relative inline-block h-10 w-8  object-center"
                    />
                    <div>
                        <p class="block  text-base font-medium leading-relaxed tracking-normal  antialiased">
                            No.1 All Rounder
                        </p>

                        <p class="block  text-base font-medium leading-relaxed tracking-normal text-blue-900 antialiased">
                            Hardik Pandya
                        </p>

                    </div>
                </div>


                <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-4">
                    <img
                        src="team.png"
                        alt="Tania Andrew"
                        class="relative inline-block h-10 w-8  object-center"
                    />
                    <div>
                        <p class="block  text-base font-medium leading-relaxed tracking-normal  antialiased">
                            No.1 Team
                        </p>

                        <p class="block  text-base font-medium leading-relaxed tracking-normal text-blue-900 antialiased">
                            India
                        </p>

                    </div>
                </div>


            </div>


            <Link to="cricket-rankings" class=" items-center text-center  mt-2 font-normal text-base text-violet-950 justify-between block tracking-normal antialiased hover:underline ">
                Show More
            </Link>




        </div></div>
    )
}

export default TopRankings