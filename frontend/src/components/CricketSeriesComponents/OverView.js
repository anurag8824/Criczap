import React from 'react'
import { Link } from 'react-router-dom'

const OverView = () => {
  return (
    <div><div class="relative  overflow-x-auto ">
      <table class=" text-sm w-full text-left rtl:text-right text-white ">
        <thead class="text-lg font-medium bg-blue-950   ">
          <tr>
            <th scope="col" class="px-6 w-96 py-3">
              Date
            </th>
            <th scope="col" class="px-6 w-full py-3">
              Match Details
            </th>

          </tr>
        </thead>

        <tbody>

          <tr class="border-b border-gray-200 dark:border-gray-700">

            <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
              Fri, 21 Nov 2025
            </th>




            <td class="list-none py-2.5 text-blue-950">

              <li class="px-6 py-1  grid">
                <Link to="#" className='font-medium text-base hover:underline'>
                  The Ashes 2025-26, 1st Test Match </Link>
                <span className=''>8:00 am your time (2:30 am GMT)</span>

                <span>Perth Stadium, Perth, Australia</span>
              </li>


              <li class="px-6 py-1  grid">
                <div className='h-36 w-72 items-center grid grid-rows-2 pl-3 gap-y-1 justify-start bg-gray-200'>
                  <div className='w-full flex  gap-2   '>
                    <img src='/ind.png' className='w-12 h-12  rounded-full' />
                    <p className='pt-3 text-lg font-normal uppercase '>India</p>
                  </div>

                  <div className='w-full flex  gap-2   '>
                    <img src='/ind.png' className='w-12 h-12 rounded-full' />
                    <p className='pt-3  text-lg font-normal uppercase '>New Zealand</p>
                  </div>





                </div>
              </li>








            </td>


          </tr>



          <tr class="border-b border-gray-200 dark:border-gray-700">

            <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
              Fri, 21 Nov 2025
            </th>




            <td class="list-none py-2.5 text-blue-950">

              <li class="px-6 py-1  grid">
                <Link to="#" className='font-medium text-base hover:underline'>
                  The Ashes 2025-26, 1st Test Match </Link>
                <span className=''>8:00 am your time (2:30 am GMT)</span>

                <span>Perth Stadium, Perth, Australia</span>
              </li>


              <li class="px-6 py-1  grid">
                <div className='h-36 w-36 bg-gray-400'>

                </div>
              </li>








            </td>


          </tr>









        </tbody>
      </table>
    </div></div>
  )
}

export default OverView