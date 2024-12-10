import React from 'react'
import { Link } from 'react-router-dom'
import FixtureFilter from './FixtureFilter'
import { useTranslation } from 'react-i18next';

const Fixtures = ({ data }) => {
  const formatUrl = (text) => {
    return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
  };

  const {t} = useTranslation()

  return (
    <div>

      {/* <FixtureFilter /> */}

      {data?.response?.items.length > 0 ?




        <div class="relative  overflow-x-auto ">
          <table class=" w-full text-left rtl:text-right text-gray-950 ">
            <thead class="bg-gray-200 dark:bg-gray-700 dark:text-white ">
              <tr>
                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  {t("Series")}
                </th>
                <th scope="col" class="px-6 font-normal w-1/2 py-3">
                  {t("Match Details")}
                </th>

                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  {t("Time")}
                </th>

              </tr>
            </thead>

            <tbody>

              {data?.response?.items.map((item, index) => (
                item ? (
                  <tr key={index} class="border-b border-gray-200 dark:border-gray-700">

                    <td scope="row" class=" dark:text-white  text-blue-950 font-normal text-base text-center align-text-top py-3 px-3 whitespace-nowrap">
                      <li className='grid text-left'>
                        <Link className='text-blue-700 dark:text-white'>{item.competition?.title}</Link>
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
                        <Link to={`/match-detail/${item.match_id}/${formatUrl(`${item.short_title}-${item.competition.title}`)}/commentary`} className='font-normal dark:text-white text-blue-950 text-base hover:underline'>
                          {item.title}, {item.match_number}-{item.format_str}
                        </Link>

                        <span className='text-gray-500'>{item.venue?.name} {item.venue?.location}, {item.venue?.country}</span>
                        <span className='text-yellow-400'>{item.status_str}</span>

                      </li>
                    </td>

                    <td className='list-none align-text-top'>
                      <li className='grid top-0'>
                        <span className='dark:text-white'>{item.date_start_ist}</span>
                        {/* <span className=''>(21 Nov, 2:30 AM GMT)</span> */}

                      </li>

                    </td>


                  </tr>

                ) : ""
              ))}








            </tbody>
          </table>
        </div>

        : <p className='text-center text-red-500 font-medium'>Not Available yet</p>}

    </div>
  )
}

export default Fixtures