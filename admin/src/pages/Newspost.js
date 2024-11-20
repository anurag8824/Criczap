import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Newspost = () => {
    return (
        <div className='md:min-h-screen md:pb-0 pb-10'>

            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

                <div className="grid grid-cols-3 gap-4 mb-4">

                    <Link to='/add-post' className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-blue-950 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg> Add News/Post
                        </p>
                    </Link>




                </div>







            </div>

            <div className='mt-4'>
                <p className='text-md font-medium'>
                    All News
                </p>


                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">News ID</th>
                                <th scope="col" className="px-6 py-3">News headline</th>
                                <th scope="col" className="px-6 py-3"></th>
                                <th scope="col" className="px-6 py-3"></th>
                                {/* <th scope="col" className="px-6 py-3"></th> */}
                                {/* <th scope="col" className="px-6 py-3"></th> */}

                            </tr>
                        </thead>

                        <tbody>
                            <tr className="bg-white text-blue-950 border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                                <td className="px-6 py-4">ind vs wi news live updates</td>
                                {/* <td className="px-6 py-4">Add</td> */}
                                {/* <td className="px-6 py-4">Remove</td> */}
                                <td className="px-6 py-4 text-xl "><Link to='/add-post'><FaEdit /></Link></td>
                                <td className="px-6 py-4 text-xl text-red-500"><button><MdDelete /></button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </div>

    )
}

export default Newspost