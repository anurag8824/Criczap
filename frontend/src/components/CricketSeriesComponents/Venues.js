import React from 'react'
import { Link } from 'react-router-dom'

const Venues = () => {
  return (
    <div><div className='grid gap-y-2.5 grid-flow-row py-5 px-6'>


      <div className='md:flex gap-4 border-b pb-2.5 items-center'>
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
            M. Chinnaswamy Stadium
            </Link>

            <button type='button' data-modal-target="default-modal" data-modal-toggle="default-modal"
              // onClick={handleShareClick}
              className='relative hover:bg-gray-100 p-2.5 h-10 w-10 rounded-full'
            >
              {/* <FaShare style={{ color: 'gray' }} /> */}
            </button>
          </div>

          <span className='text-base text-gray-600'>Country ‑ India ● City ‑ Bengaluru ● Capacity ‑ 40000</span>
          
{/* 
          Share popup
          {isOpen && (
            <div ref={popupRef}
              style={{ top: "2.5rem", minWidth: '12rem' }}
              className='absolute right-0 top-10 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-3 z-10'

            >
              <div className='flex flex-col space-y-2'>
                <a
                  href={`https://wa.me/?text=${window.location.href}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-700 hover:text-green-500'
                >
                  <img
                    src='https://cdn-icons-png.flaticon.com/24/124/124034.png'
                    alt='WhatsApp'
                    className='w-5 h-5 mr-2'
                  />
                  WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-700 hover:text-blue-400'
                >
                  <img
                    src='https://cdn-icons-png.flaticon.com/24/733/733579.png'
                    alt='Twitter'
                    className='w-5 h-5 mr-2'
                  />
                  Twitter
                </a>
                <button
                  onClick={copyLink}
                  className='flex items-center text-gray-700 hover:text-blue-600'
                >
                  <img
                    src='https://cdn-icons-png.flaticon.com/24/54/54702.png'
                    alt='Copy Link'
                    className='w-5 h-5 mr-2'
                  />
                  Copy Link
                </button>
              </div>
            </div>
          )}
 */}


        </div>

      </div>







    </div></div>
  )
}

export default Venues