import React from 'react'
import FbConnect from '../components/FbConnect'

const LatestPolls = () => {
    return (


        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>Latest Polls</p>
                <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                    <div class="flex flex-col md:flex-row p-6 space-y-4 md:space-y-0 md:space-x-4 w-full md:overflow-x-scroll custom-scrollbar">

                        {/* first poll  */}
                        <div class="h-96 flex-shrink-0 w-full md:max-w-xs rounded-lg border bg-white">
                            <div class="w-full rounded-lg rounded-b-none bg-blue-950 text-center">
                                <h5 class="truncate p-3 text-sm tracking-tight text-white">
                                    T20 Spring Challenge 2024
                                </h5>
                                <h5 class="text-sm pb-2 tracking-tight text-white">
                                    <span>28th Match </span>|<span> 19 Oct 2024 </span>|<span> 09:30 PM</span>
                                </h5>
                            </div>

                            <div class="mt-4 items-center text-center">
                                Who will win ?
                                <div class="my-4 flex items-center pl-8">
                                    <input
                                        id="default-radio-1"
                                        type="radio"
                                        value=""
                                        name="default-radio"
                                        class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 "
                                    />
                                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        North westgg
                                    </label>
                                </div>
                                <div class="flex items-center pl-8">
                                    <input
                                        id="default-radio-2"
                                        type="radio"
                                        value=""
                                        name="default-radio"
                                        class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600  "
                                    />
                                    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Lions
                                    </label>
                                </div>
                                <button class="my-5 rounded-lg bg-violet-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800">
                                    Submit
                                </button>
                            </div>
                        </div>

                        {/* second poll  */}
                        <div class="h-96 flex-shrink-0 w-full md:max-w-xs rounded-lg border bg-white">
                            <div class="w-full rounded-lg rounded-b-none bg-blue-950 text-center">
                                <h5 class="truncate p-3 text-sm tracking-tight text-white">
                                    T20 Spring Challenge 2024
                                </h5>
                                <h5 class="text-sm pb-2 tracking-tight text-white">
                                    <span>28th Match </span>|<span> 19 Oct 2024 </span>|<span> 09:30 PM</span>
                                </h5>
                            </div>
                            <div class="mt-4 items-center text-center">
                                Who will win ?
                                <div class="my-4 flex items-center pl-8">
                                    <input
                                        id="default-radio-3"
                                        type="radio"
                                        value=""
                                        name="default-radio"
                                        class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 "
                                    />
                                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        North west
                                    </label>
                                </div>
                                <div class="flex items-center pl-8">
                                    <input
                                        id="default-radio-4"
                                        type="radio"
                                        value=""
                                        name="default-radio"
                                        class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 "
                                    />
                                    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Lions
                                    </label>
                                </div>
                                <button class="my-5 rounded-lg bg-violet-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800">
                                    Submit
                                </button>
                            </div>
                        </div>




                    </div>







                </div>

                <FbConnect />


            </div>


        </div>






    )
}

export default LatestPolls
