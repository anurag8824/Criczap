import React from 'react'
import { Link } from 'react-router-dom'

const HomePolls = () => {
    return (
        <div>  <div className='rounded-xl border bg-white px-3 py-3'>
            <div class="text-2xl font-medium border-b pb-3">Latest Polls</div>


            <div className="lg:grid md:grid-cols-2 gap-6  mt-3 w-full md:justify-items-center ">
                {/* First Column */}
                <div class="h-96 w-full mt-2 mx-auto max-w-xs rounded-lg border bg-white">
                    <div class="w-full rounded-lg rounded-b-none bg-blue-950 text-center">
                        <h5 class="truncate p-3 text-sm tracking-tight text-white dark:text-white">
                            T20 Spring Challenge 2024
                        </h5>
                        <h5 class="text-sm pb-2 tracking-tight text-white dark:text-white">
                            <span>28th Match </span>|<span> 19 Oct 2024 </span>|<span> 09:30 PM</span>
                        </h5>
                    </div>
                    <div class="mt-4 items-center text-center">
                        Who will win ?
                        <div class="my-4 pl-12 flex items-center ">
                            <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label
                                for="default-radio-1"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                North west
                            </label>
                        </div>
                        <div class="flex items-center pl-12  ">
                            <input
                                checked
                                id="default-radio-2"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label
                                for="default-radio-2"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Lions
                            </label>
                        </div>
                        <button class="my-5 rounded-lg bg-violet-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Second Column */}
                <div class="h-96 w-full mt-2 mx-auto max-w-xs rounded-lg border bg-white">
                    <div class="w-full rounded-lg rounded-b-none bg-blue-950 text-center">
                        <h5 class="truncate p-3 text-sm tracking-tight text-white dark:text-white">
                            T20 Spring Challenge 2024
                        </h5>
                        <h5 class="text-sm pb-2 tracking-tight text-white dark:text-white">
                            <span>28th Match </span>|<span> 19 Oct 2024 </span>|<span> 09:30 PM</span>
                        </h5>
                    </div>
                    <div class="mt-4 items-center  text-center">
                        Who will win ?
                        <div class="my-4 pl-12  flex items-center ">
                            <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label
                                for="default-radio-1"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Default
                            </label>
                        </div>
                        <div class="flex items-center pl-12">
                            <input
                                checked
                                id="default-radio-2"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                            />
                            <label
                                for="default-radio-2"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Checked state
                            </label>
                        </div>
                        <button class="my-5 rounded-lg bg-violet-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800">
                            Submit
                        </button>
                    </div>
                </div>






            </div>


          

            <div className=' text-center'>
                <Link to="polls" class=" mt-2 rounded-lg px-3 py-2 text-fuchsia-950  text-sm font-medium hover:underline">
                    See More
                </Link>


            </div>








        </div>
        </div>
    )
}

export default HomePolls