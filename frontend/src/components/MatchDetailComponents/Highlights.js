import React from 'react'

const Highlights = () => {
  return (
    <div className=' mx-2 '>


      <div className='justify-start gap-4 text-center   rounded-md md:flex grid grid-cols-2 w-full'>



        <button className='border-r rounded-full md:w-1/6 w-full  py-2 shadow-lg hover:bg-violet-700 hover:text-white'>Team1 1st Inns </button>
        <button className='border-r rounded-full md:w-1/6 w-full py-2 shadow-lg hover:bg-violet-700 hover:text-white'>Team1 2nd Inns</button>
        <button className='border-r rounded-full md:w-1/6 w-full py-2 shadow-lg hover:bg-violet-700 hover:text-white'>Team2 1st Inns</button>

        <button className='  py-2 rounded-full md:w-1/6 w-full shadow-lg hover:bg-violet-700 hover:text-white'>Team2 2nd Inns</button>




      </div>




      <div className='justify-between border mt-6 text-center  rounded-sm md:flex grid grid-cols-1 w-full'>



        <button className='border-r md:w-1/6 w-full py-3 hover:bg-violet-700 hover:text-white'>All</button>
        <button className='border-r md:w-1/6 w-full py-3 hover:bg-violet-700 hover:text-white'>Fours</button>
        <button className='border-r md:w-1/6 w-full py-3 hover:bg-violet-700 hover:text-white'>Sixes</button>
        <button className='border-r md:w-1/6 w-full py-3 hover:bg-violet-700 hover:text-white'>Wickets</button>
        <button className='border-r md:w-1/6 w-full py-3 hover:bg-violet-700 hover:text-white'>Fifties</button>
        <button className=' md:w-1/6 w-full py-3 hover:bg-violet-700 hover:text-white'>Hundreds</button>




      </div>



      {/* highlights scores with commentary */}

      <div className='mt-8'>
        {/* 1st commentary  */}
        <div className='mt-6 flex  gap-x-3  border-b  px-4 pt-4'>
          <div className=' font-medium pb-4 '>
            <p className='mb-2'>63.2 </p>
            <p className='border bg-blue-500 w-8 h-8 rounded-full text-white flex items-center justify-center'>3</p>

          </div>

          <div className='flex w-full '>
            <p className='   '>Dane Piedt to Mehidy Hasan Miraz: Three Runs. Chase for the fielders, Trail is now just of 3 runs. Dane slice a length ball on the off-side and Mehidy with an edge send ball towards third man to grab three runs. </p>
          </div>

        </div>

        {/* 2nd commentary  */}

        <div className='mt-6 flex  gap-x-3  border-b  px-4 pt-4'>
          <div className=' font-medium pb-4 '>
            <p className='mb-2'>63.2 </p>
            <p className='border bg-blue-500 w-8 h-8 rounded-full text-white flex items-center justify-center'>3</p>

          </div>

          <div className='flex w-full '>
            <p className='   '>Dane Piedt to Mehidy Hasan Miraz: Three Runs. Chase for the fielders, Trail is now just of 3 runs. Dane slice a length ball on the off-side and Mehidy with an edge send ball towards third man to grab three runs. </p>
          </div>

        </div>

      </div>







    </div>
  )
}

export default Highlights