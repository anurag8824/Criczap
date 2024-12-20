import React from 'react'
import { Link } from 'react-router-dom'



const Dashboard = () => {


    return (
        <div className='md:min-h-screen md:pb-0 pb-10'>

            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

                <div className="grid grid-row md:grid md:grid-row-3 gap-4 mb-4">

                    <Link to='/add-post' className="flex md:w-1/2 w-full items-center justify-center h-24  text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
                        <p className="text-2xl flex items-center gap-2 text-white dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg> Add News/Post
                        </p>
                    </Link>


                    <Link to='/add-video' className="flex md:w-1/2 w-full items-center justify-center h-24  text-white bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
                        <p className="text-2xl flex items-center gap-2 text-white dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>Add Youtube Video
                        </p>
                    </Link>

                    

                    <Link to="#" className=" hidden items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-blue-950 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>Add Carousal
                        </p>
                    </Link> 

                    

                   

                </div>


            </div>



        </div>

    )
}

export default Dashboard