import React from 'react'
import { Link } from 'react-router-dom'

const StatsTable = () => {
    return (
        <div>
            <div class="relative  overflow-x-auto ">
                <table class=" w-full text-left rtl:text-right text-gray-950 ">
                    <thead class="bg-gray-200   ">
                        <tr>
                            <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                S.No.
                            </th>
                            <th scope="col" class="px-6 font-normal w-1/2 py-3">
                                Player
                            </th>

                            <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                Team
                            </th>

                            <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                Innings
                            </th>

                            <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                Runs
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                            <td scope='row'>
                                1

                            </td>

                            <td scope="row" class="font-normal text-base py-3 px-3  whitespace-nowrap">
                                <Link className='text-blue-700'>Rachin Ravindra</Link>
                            </td>

                            <td scope='row' class="">
                                Australia
                            </td>

                            <td className=''>
                                2
                            </td>

                            <td className=''>
                                173
                            </td>

                        </tr>

                        {/* 2nd row  */}

                        <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                            <td scope='row'>
                                1

                            </td>

                            <td scope="row" class="font-normal text-base py-3 px-3  whitespace-nowrap">
                                <Link className='text-blue-700'>Rachin Ravindra</Link>
                            </td>

                            <td scope='row' class="">
                                Australia
                            </td>

                            <td className=''>
                                2
                            </td>

                            <td className=''>
                                173
                            </td>

                        </tr>






                    </tbody>
                </table>
            </div></div>
    )
}

export default StatsTable