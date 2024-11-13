import React from 'react'
import { Link } from 'react-router-dom'
import FixtureFilter from './FixtureFilter'

const Fixtures = () => {
  return (
    <div>

        <FixtureFilter/>



      <div class="relative  overflow-x-auto ">
        <table class=" w-full text-left rtl:text-right text-gray-950 ">
          <thead class="bg-gray-200   ">
            <tr>
              <th scope="col" class="px-6 font-normal w-1/4 py-3">
                Series
              </th>
              <th scope="col" class="px-6 font-normal w-1/2 py-3">
                Match Details
              </th>

              <th scope="col" class="px-6 font-normal w-1/4 py-3">
                Time
              </th>

            </tr>
          </thead>

          <tbody>

            <tr class="border-b border-gray-200 dark:border-gray-700">

              <td scope="row" class="  text-blue-950 font-normal text-base text-center align-text-top py-3 px-3 whitespace-nowrap">
                <li className='grid text-left'>
                  <Link className='text-blue-700'>The Ashes 2025-26</Link>
                  <span>21 November, 2025</span>
                  <span className='text-gray-500'>Friday</span>
                </li>
              </td>


              <td class="list-none py-2.5 text-blue-950">
                <li class="px-6 py-1  grid">
                  <Link to="#" className='font-normal text-blue-700 text-base hover:underline'>
                    Australia vs England, 1st Test Match
                  </Link>

                  <span className='text-gray-500'>Perth Stadium, Perth, Australia</span>
                  <span className='text-yellow-400'>Live/Coming Soon/Upcoming/Team win by 8 run or wicket</span>

                </li>
              </td>

              <td className='list-none align-text-top'>
                <li className='grid top-0'>
                  <span className=''>8:00 AM, GMT+05:30</span>
                  <span className=''>(21 Nov, 2:30 AM GMT)</span>

                </li>

              </td>


            </tr>

            {/* 2nd row  */}

            <tr class="border-b border-gray-200 dark:border-gray-700">

              <td scope="row" class="  text-blue-950 font-normal text-base text-center align-text-top py-3 px-3 whitespace-nowrap">
                <li className='grid text-left'>
                  <Link className='text-blue-700'>The Ashes 2025-26</Link>
                  <span>21 November, 2025</span>
                  <span className='text-gray-500'>Friday</span>
                </li>
              </td>


              <td class="list-none py-2.5 text-blue-950">
                <li class="px-6 py-1  grid">
                  <Link to="#" className='font-normal text-blue-700 text-base hover:underline'>
                    Australia vs England, 1st Test Match
                  </Link>

                  <span className='text-gray-500'>Perth Stadium, Perth, Australia</span>
                  <span className='text-yellow-400'>Live/Coming Soon/Upcoming/Team win by 8 run or wicket</span>

                </li>
              </td>

              <td className='list-none align-text-top'>
                <li className='grid top-0'>
                  <span className=''>8:00 AM, GMT+05:30</span>
                  <span className=''>(21 Nov, 2:30 AM GMT)</span>

                </li>

              </td>


            </tr>





          </tbody>
        </table>
      </div>
      
      </div>
  )
}

export default Fixtures