import React from 'react'
import { Link } from 'react-router-dom'

const OverView = ({ data }) => {
  const formatUrl = (text) => {
    return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
  };
  return (
    <div>

      {data?.response?.items ?

        <>

          {data?.response?.items.length > 0 ?


            <div class="relative  overflow-x-auto ">
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


                  {data?.response?.items?.map((item, index) => (
                    item ? (
                      <tr key={index} class="border-b border-gray-200 dark:border-gray-700">

                        <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 whitespace-nowrap">
                          {new Date(item.competition?.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                        </th>




                        <td class="list-none py-2.5 text-blue-950">
                          <li class="px-6 py-1  grid">
                            <Link to={`/match-detail/${item.match_id}/${formatUrl(`${item.short_title}-${item.competition.title}`)}/commentary`} className='font-medium text-base hover:underline'>
                              {item.competition?.title}, {item?.subtitle} </Link>
                            <span className=''>    {item.date_start_ist}</span>

                            <span>{item.venue?.location},{item.venue?.country}</span>
                          </li>


                          <li class="px-6 py-1  grid">
                            <Link to={`/match-detail/${item.match_id}/${formatUrl(`${item.short_title}-${item.competition.title}`)}/commentary`} className=' md:w-full w-72 items-center grid grid-rows-2 gap-y-2 px-3 py-2 justify-start bg-gray-200'>


                              <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                <div class="flex items-center gap-x-3">
                                  <img
                                    src={item.teama?.logo_url}
                                    alt="Tania Andrew"
                                    class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                  />
                                  <div>
                                    <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                      {item.teama?.short_name}
                                    </p>

                                  </div>
                                </div>
                                <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                  {item.teama?.scores_full}

                                </p>
                              </div>

                              <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                <div class="flex items-center gap-x-3">
                                  <img
                                    src={item.teamb?.logo_url}
                                    alt="Tania Andrew"
                                    class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                  />
                                  <div>
                                    <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                      {item.teamb?.short_name}
                                    </p>

                                  </div>
                                </div>
                                <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                  {item.teamb?.scores_full}

                                </p>
                              </div>




                              <p className='text-red-500 text-sm'>{item.status_note}</p>





                            </Link>
                          </li>








                        </td>


                      </tr>

                    ) : ""
                  ))}











                </tbody>
              </table>
            </div>



            : <p className='text-center text-red-500 font-medium'>Not Available yet</p>}

        </>

        : ""

        // <div className="flex py-1 justify-center ">
        //   <div className="w-4 h-4 border-2 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        // </div>

      }

    </div>
  )
}

export default OverView