import React from 'react'
import { Link } from 'react-router-dom'

const Venues = ({data}) => {
  return (
    <div>

      <div className='grid gap-y-2.5 grid-flow-row py-5 px-6'>

        {data?.response.items.map((item, index) => (
          item ? (

            <div key={index} className='md:flex gap-4 border-b pb-2.5 items-center'>
              <img
                src='/wankhede.png'
                alt='Virat Kohli News'
                className='relative border inline-block md:h-24 md:w-36 rounded-md object-cover object-center'
              />

              <div className='grid tracking-normal align-text-top antialiased relative'>
                <div className='flex  justify-between'>
                  <Link
                    to='#'
                    className='text-xl pr-6 line-clamp-2 font-semibold'
                  >
                   {item?.venue?.name}
                  </Link>

                  
                </div>

                <span className='text-base text-gray-600'>Country ‑ {item?.venue?.country} ● City ‑ {item?.venue?.location}</span>

              


              </div>

            </div>

          ) : ''
        ))}










      </div>
    </div>
  )
}

export default Venues