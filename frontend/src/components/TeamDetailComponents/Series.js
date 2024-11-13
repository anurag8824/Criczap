import React from 'react'
import { Link } from 'react-router-dom'
import TeamSeriesFilter from './TeamSeriesFilter'

const Series = () => {
  return (
    <div>

      <TeamSeriesFilter/>

      {/* table starts  */}

      <div class="relative  overflow-x-auto ">
        <table class=" text-sm w-full text-left rtl:text-right text-white ">
          <thead class="text-lg font-medium bg-blue-950   ">
            <tr>
              <th scope="col" class="px-6 w-96 py-3">
                Month
              </th>
              <th scope="col" class="px-6 w-full py-3">
                Series Name
              </th>

            </tr>
          </thead>

          <tbody>

            <tr class="border-b border-gray-200 dark:border-gray-700">

              <th scope="row" class=" text-blue-900 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                December 2024
              </th>




              <td class="list-none w-full  py-2.5 text-black">

                <li class="md:pl-6 md:pr-2 py-2  px-1  grid">
                  <Link to="overview" className=' text-sm font-medium hover:underline'>India tour of England 2025</Link>
                  <span className='text-gray-500'>21 Nov - 08 Jan 2026</span>
                </li>











              </td>


            </tr>


            <tr class="border-b border-gray-200 dark:border-gray-700">

              <th scope="row" class=" text-blue-800 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                December 2024
              </th>




              <td class="list-none py-2.5  text-black">

                <li class="md:pl-6 md:pr-2 py-2 px-1   grid">
                  <Link to="overview" className='  text-sm font-medium hover:underline'>India tour of England 2025</Link>
                  <span className='text-gray-500'>21 Nov - 08 Jan 2026</span>
                </li>



                <li class="md:pl-6 md:pr-2 py-2  px-1  grid">
                  <Link to="overview" className='  text-sm font-medium hover:underline'>India tour of England 2025</Link>
                  <span className='text-gray-500'>21 Nov - 08 Jan 2026</span>
                </li>









              </td>


            </tr>




          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Series