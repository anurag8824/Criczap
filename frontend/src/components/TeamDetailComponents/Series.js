import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TeamSeriesFilter from './TeamSeriesFilter'


const Series = ({ data }) => {




  console.log(data, "all team series list")

  const formatUrl = (text) => {
    return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
  };

  return (
    <div className='pb-10'>

    
       {data.length > 0 ?  


      <div class="relative    overflow-x-auto ">
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

            {[...new Map(
              data.map((item) => [item.competition.title, item])
            ).values()].map((item, index) => (
              item?.competition?.title ? (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                  <th scope="row" className="text-blue-900 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                    {new Date(item.competition.datestart).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                  </th>
                  <td className="list-none w-full py-2.5 text-black">
                    <li className="md:pl-6 md:pr-2 py-2 px-1 grid">
                      <Link to={`/cricket-series/${item.competition.cid}/${formatUrl(item.competition.title)}/overview`} className="text-sm font-medium hover:underline">{item.competition?.title}</Link>
                      <span className="text-gray-500">{item.competition?.datestart + " to " + item.competition?.dateend}</span>
                    </li>
                  </td>
                </tr>
              ) : ""
            ))}






          </tbody>
        </table>
      </div>

     
      : <p className='font-medium text-sm text-red-500 text-center'>Not Available</p> }
    </div>
  )
}

export default Series