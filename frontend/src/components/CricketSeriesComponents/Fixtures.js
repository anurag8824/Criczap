import React from 'react'
import { Link } from 'react-router-dom'
import FixtureFilter from './FixtureFilter'

const Fixtures = ({ data }) => {
  return (
    <div>

      {/* <FixtureFilter /> */}



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

            {data?.response?.items.map((item, index) => (
              item ? (
                <tr key={index} class="border-b border-gray-200 dark:border-gray-700">

                  <td scope="row" class="  text-blue-950 font-normal text-base text-center align-text-top py-3 px-3 whitespace-nowrap">
                    <li className='grid text-left'>
                      <Link className='text-blue-700'>{item.competition?.title}</Link>
                      <span>
                        {new Date(item.date_start_ist).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        }).replace(/(\w+) (\d{4})/, '$1, $2')}
                      </span>

                      <span className='text-gray-500'> {new Date(item.date_start_ist).toLocaleDateString('en-GB', { weekday: 'long' })}</span>
                    </li>
                  </td>


                  <td class="list-none py-2.5 text-blue-950">
                    <li class="px-6 py-1  grid">
                      <Link to={`/match-detail/${item.match_id}/commentary`} className='font-normal text-blue-950 text-base hover:underline'>
                        {item.title}, {item.match_number}-{item.format_str}
                      </Link>

                      <span className='text-gray-500'>{item.venue?.name} {item.venue?.location}, {item.venue?.country}</span>
                      <span className='text-yellow-400'>{item.status_str}</span>

                    </li>
                  </td>

                  <td className='list-none align-text-top'>
                    <li className='grid top-0'>
                      <span className=''>{item.date_start_ist}</span>
                      {/* <span className=''>(21 Nov, 2:30 AM GMT)</span> */}

                    </li>

                  </td>


                </tr>

              ) : ""
            ))}








          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Fixtures