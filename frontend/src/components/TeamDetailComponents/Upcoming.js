import React from 'react'
import UpcomingFilter from './UpcomingFilter'
import { Link } from 'react-router-dom'

const Upcoming = () => {
  return (

    <div>

      <UpcomingFilter/>

    <div class="relative  overflow-x-auto ">
      <table class="  w-full text-left rtl:text-right  ">
        <thead class=" bg-gray-100   ">
          <th scope="col" class="px-6 w-96 py-3">
            Date
          </th>
          <th scope="col" class="px-6 w-full py-3">
            Match Details
          </th>

        </thead>

        <tbody>

          <tr class="border-b border-gray-200 dark:border-gray-700">

            <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 whitespace-nowrap">
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
                <div className=' w-72 items-center grid grid-rows-2 gap-y-2 px-3 py-2 justify-start bg-gray-200'>


                  <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                    <div class="flex items-center gap-x-3">
                      <img
                        src="/ind.png"
                        alt="Tania Andrew"
                        class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                      />
                      <div>
                        <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                          {/* {data?.response.match_info.teama.short_name} */}
                          IND
                        </p>

                      </div>
                    </div>
                    {/* <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                      {data?.response.match_info.teama.scores_full}
                      259-10 (79.1)
                      & 255-10 (69.4)
                    </p> */}
                  </div>

                  <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                    <div class="flex items-center gap-x-3">
                      <img
                        src="/nz.png"
                        alt="Tania Andrew"
                        class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                      />
                      <div>
                        <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                          {/* {data?.response.match_info.teama.short_name} */}
                          NZ
                        </p>

                      </div>
                    </div>
                    {/* <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                      {data?.response.match_info.teama.scores_full}
                      259-10 (79.1)
                      & 255-10 (69.4)
                    </p> */}
                  </div>





                  <p className='text-red-500 text-sm'>Stumps</p>





                </div>
              </li>








            </td>


          </tr>












        </tbody>
      </table>
    </div>

    </div>

  )
}

export default Upcoming