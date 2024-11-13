import React from 'react'
import { Link } from 'react-router-dom'

const Squad = ({ data }) => {
  return (
    <div>

      <div className=' md:flex justify-between md:w-full pb-2 '>

        {/* 1st team players  */}

        <div className=' w-full'>

          <div className='w-full flex justify-center gap-2   '>
            <img src={data?.response.match_info.teama.logo_url} className='w-12 h-12 border-b rounded-full' />
            <p className='pt-3 text-lg font-medium uppercase '>{data?.response.match_info.teama.name}</p>
          </div>








          {/* india squad players  */}
          <div className='border mt-6 border-l-0 gap-y-2.5 grid-flow-row w-full md:p-8'>

            <p className='text-center  underline font-medium text-base mb-2'>Squads</p>


            {data?.response["match-playing11"].teama.squads.map((item, index) => (



              item.playing11 == "true" ? (

                <div key={index} class="flex gap-4 border-b pt-1 pb-2.5  items-center">
                  <img
                    src="/demoplayer.png"
                    alt="Tania Andrew"
                    class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                  />

                  <p class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                    <Link to="/cricket-player-detail" className='cursor-pointer hover:underline'>{item.name}</Link>
                    <span>{item.role}</span>
                  </p>
                </div>


              ) : null
            ))}








          </div>



          {/* india bench players  */}
          <div className='border mt-6 border-l-0 gap-y-2.5 grid-flow-row w-full md:p-8'>

            <p className='text-center  underline font-medium text-base mb-2'>Bench</p>


            {data?.response["match-playing11"].teama.squads.map((item, index) => (



              item.playing11 == "false" ? (


                <div key={index} class="flex gap-4 border-b pt-1 pb-2.5  items-center">
                  <img
                    src="/demoplayer.png"
                    alt="Tania Andrew"
                    class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                  />

                  <p class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                    <Link to="/cricket-player-detail" className='cursor-pointer hover:underline'>{item.name}</Link>
                    <span>{item.role}</span>
                  </p>
                </div>



              ) : null
            ))}







          </div>

        </div>



        {/* 2nd team playes  */}

        <div className=' md:mt-0 mt-6 w-full'>

          <div className='w-full flex justify-center gap-2   '>
            <img src={data?.response.match_info.teamb.logo_url} className='w-12 h-12 border rounded-full' />
            <p className='pt-3 text-lg font-medium uppercase '>{data?.response.match_info.teamb.name}</p>
          </div>


          {/* bangladesh squad players  */}
          <div className='border mt-6 border-r-0 gap-y-2.5 grid-flow-row w-full md:p-8'>
            <p className='text-center  underline font-medium text-base mb-2'>Squads</p>

            {data?.response["match-playing11"].teamb.squads.map((item, index) => (



              item.playing11 == "true" ? (

                <div key={index} class="flex gap-4 border-b pt-1 pb-2.5  items-center">
                  <img
                    src="/demoplayer.png"
                    alt="Tania Andrew"
                    class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                  />

                  <p class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                    <Link to="/cricket-player-detail" className='cursor-pointer hover:underline'>{item.name}</Link>
                    <span>{item.role}</span>
                  </p>
                </div>


              ) : null
            ))}




          </div>

          {/* bangladesh bench players  */}

          <div className='border border-r-0 mt-6 gap-y-2.5 grid-flow-row w-full md:p-8'>
            <p className='text-center  underline font-medium text-base mb-2'>Bench</p>


            {data?.response["match-playing11"].teamb.squads.map((item, index) => (



              item.playing11 == "false" ? (

                <div key={index} class="flex gap-4 border-b pt-1 pb-2.5  items-center">
                  <img
                    src="/demoplayer.png"
                    alt="Tania Andrew"
                    class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                  />

                  <p class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                    <Link to="/cricket-player-detail" className='cursor-pointer hover:underline'>{item.name}</Link>
                    <span>{item.role}</span>
                  </p>
                </div>


              ) : null
            ))}




          </div>

        </div>
















      </div>











    </div>
  )
}

export default Squad