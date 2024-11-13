import React from 'react'
import { Link } from 'react-router-dom'

const Info = ({ data }) => {
  return (
    <div>
      <div className='border-b pb-2 flex justify-between    w-full '>
        <div className='w-full  text-center flex flex-col  items-center  '>
          <img src={data?.response.match_info.teama.logo_url} className='w-12 h-12 border rounded-full' />
          <p className='pt-3 text-center'> {data?.response.match_info.teama.name}   </p>

        </div>

        <div>
          <p className='border bg-black w-8 h-8 mt-3 rounded-full text-white flex items-center justify-center'>Vs</p>
        </div>

        <div className='w-full text-center flex flex-col  items-center  '>
          <img src={data?.response.match_info.teamb.logo_url} className='w-12 h-12 border rounded-full' />
          <p className='pt-3 text-center  '> {data?.response.match_info.teamb.name}</p>

        </div>


      </div>

      <div>

        <div className='border-b mt-4 flex justify-between  w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Series:</p>
          <Link to="/cricket-series" className='font-normal text-base text-blue-500 py-3 pl-3 hover:underline  w-full md:w-1/2'>{data?.response.match_info.competition.title}</Link>

        </div>

        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Match:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>
           {data?.response.match_info.title}, {data?.response.match_info.subtitle}</p>

        </div>

        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Date & Time:</p>
          <p className='font-normal text-base  py-3 pl-3   w-full md:w-1/2'>

            {data?.response.match_info.date_start_ist}</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Venue:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            {data?.response.match_info.venue.name}</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Toss:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

           {data?.response.match_info.toss.text}</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Umpires:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            {data?.response.match_info.umpires}</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Third Umpire:</p>
          <p className='font-normal text-base  pl-3   py-3  w-full md:w-1/2'>

            -</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Match Referee:</p>
          <p className='font-normal text-base pl-3   py-3  w-full md:w-1/2'>

            {data?.response.match_info.referee}</p>

        </div>




      </div>
{/* 
      <div>

        <p className='font-normal   py-3 font-m text-xl   w-full md:w-1/2'>

          Recent Performance - Last 5 Matches</p>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>{data?.response.match_info.teama.name}</p>
          <div className='font-normal md:flex grid grid-cols-4 gap-x-2 gap-y-2 text-base  py-3 pl-3   w-full md:w-1/2'>

            <p className='border-2 font-medium bg-gray-100 w-8 h-8  border-gray-400 rounded-sm text-gray-400 flex items-center justify-center'>*</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>

            <p className='border-2 font-medium bg-green-100 w-8 h-8  border-green-400 rounded-sm text-green-400 flex items-center justify-center'>W</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>

            <p className='border-2 font-medium bg-green-100 w-8 h-8  border-green-400 rounded-sm text-green-400 flex items-center justify-center'>W</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>
          </div>

        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>{data?.response.match_info.teamb.name}</p>
          <div className='font-normal md:flex grid grid-cols-4 gap-x-2 gap-y-2 text-base  py-3 pl-3   w-full md:w-1/2'>

            <p className='border-2 font-medium bg-gray-100 w-8 h-8  border-gray-400 rounded-sm text-gray-400 flex items-center justify-center'>*</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>

            <p className='border-2 font-medium bg-green-100 w-8 h-8  border-green-400 rounded-sm text-green-400 flex items-center justify-center'>W</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>

            <p className='border-2 font-medium bg-green-100 w-8 h-8  border-green-400 rounded-sm text-green-400 flex items-center justify-center'>W</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>
          </div>

        </div>





      </div>
 */}

      <div>
        <p className='font-normal   py-3 font-m text-xl   w-full md:w-1/2'>

          Venue Details</p>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Stadium:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            {data?.response.match_info.venue.name}</p>

        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>City:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>


            {data?.response.match_info.venue.location}</p>
        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Country:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>


            {data?.response.match_info.venue.country}</p>
        </div>

      </div>



      <div>
        <p className='font-normal   py-3 font-m text-xl   w-full md:w-1/2'>

          Venue Weather</p>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Weather:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            {data?.response.match_info.weather.weather}</p>

        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Temperature:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>


           {data?.response.match_info.weather.temp}</p>
        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Clouds</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>



            {data?.response.match_info.weather.clouds}</p>
        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Humidity:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>




            {data?.response.match_info.weather.humidity}</p>
        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Wind:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>





            {data?.response.match_info.weather.wind_speed}</p>
        </div>


       

      </div>
















    </div>
  )
}

export default Info