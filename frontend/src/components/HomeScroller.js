// import React from 'react'
// import { Link } from 'react-router-dom'

// const HomeScroller = () => {
//   return (
//     <div>
//     <div class="md:flex border  bg-red-50 grid space-x-4 md:overflow-x-scroll custom-scrollbar  overflow-x-hidden">

//       <div class="relative  flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
//         <Link
//           to="cricket-series/overview"
//           class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all hover:underline"
//         >
//           Womens T20 World Cup 2024, 20th Match, Group B
//         </Link>


//         <Link to="match-detail/commentary">

//           <div class="p-4 pb-1 bg-white border rounded-xl ">
//             <p class="block text-red-600 mb-1 text-sm font-bold   antialiased">
//               <span className="animate-blink">●</span> Live
//             </p>
//             <div class="mb-4 flex items-center justify-between">
//               <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
//                 14th Match 04:30 AM, 16-Oct ● Sydney, Australia
//               </h5>

//             </div>
//             <div class="">
//               <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//                 <div class="flex items-center gap-x-3">
//                   <img
//                     src="ind.png"
//                     alt="Tania Andrew"
//                     class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                   />
//                   <div>
//                     <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                       India
//                     </h6>

//                   </div>
//                 </div>
//                 <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                   222/3 (20.0) 
//                 </h6>
//               </div>

//               <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//                 <div class="flex items-center gap-x-3">
//                   <img
//                     src="engw.png"
//                     alt="John Micheal"
//                     class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                   />
//                   <div>
//                     <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                       England
//                     </h6>

//                   </div>
//                 </div>
//                 <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                   89-0 (10.1)
//                 </h6>
//               </div>
//               <hr />
//               <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
//                 <div class="flex items-center gap-x-3">

//                   <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                     Series
//                   </a>

//                   <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                     Schedule
//                   </a>

//                   <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                     News
//                   </a>


//                 </div>

//               </div>

//             </div>
//           </div>
//         </Link>

//         <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
//       </div>


//       <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
//         <a

//           href="#"
//           class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all"
//         >
//           Womens T20 World Cup 2024, 20th Match, Group B
//         </a>
//         <div class="p-4 pb-1 bg-white border rounded-xl ">
//           <p href="#" class="block text-red-600 mb-1 text-sm font-bold   antialiased">
//             <span className="animate-blink">●</span> Live
//           </p>
//           <div class="mb-4 flex items-center justify-between">
//             <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
//               14th Match 04:30 AM, 16-Oct ● Sydney, Australia
//             </h5>

//           </div>
//           <div class="">
//             <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">
//                 <img
//                   src="ind.png"
//                   alt="Tania Andrew"
//                   class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                 />
//                 <div>
//                   <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                     India
//                   </h6>

//                 </div>
//               </div>
//               <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                 222/3 (20.0)
//               </h6>
//             </div>

//             <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">
//                 <img
//                   src="engw.png"
//                   alt="John Micheal"
//                   class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                 />
//                 <div>
//                   <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                     England
//                   </h6>

//                 </div>
//               </div>
//               <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                 89-0 (10.1)
//               </h6>
//             </div>
//             <hr />
//             <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">

//                 {/* <div className='flex gap-2'> */}
//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   Series
//                 </a>

//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   Schedule
//                 </a>

//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   News
//                 </a>


//                 {/* </div> */}
//               </div>

//             </div>

//           </div>
//         </div>

//         <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
//       </div>




//       <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
//         <a

//           href="#"
//           class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all"
//         >
//           Womens T20 World Cup 2024, 20th Match, Group B
//         </a>
//         <div class="p-4 pb-1 bg-white border rounded-xl ">
//           <p href="#" class="block text-red-600 mb-1 text-sm font-bold   antialiased">
//             <span className="animate-blink">●</span> Live
//           </p>
//           <div class="mb-4 flex items-center justify-between">
//             <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
//               14th Match 04:30 AM, 16-Oct ● Sydney, Australia
//             </h5>

//           </div>
//           <div class="">
//             <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">
//                 <img
//                   src="ind.png"
//                   alt="Tania Andrew"
//                   class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                 />
//                 <div>
//                   <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                     India
//                   </h6>

//                 </div>
//               </div>
//               <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                 222/3 (20.0)
//               </h6>
//             </div>

//             <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">
//                 <img
//                   src="engw.png"
//                   alt="John Micheal"
//                   class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                 />
//                 <div>
//                   <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                     England
//                   </h6>

//                 </div>
//               </div>
//               <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                 89-0 (10.1)
//               </h6>
//             </div>
//             <hr />
//             <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">

//                 {/* <div className='flex gap-2'> */}
//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   Series
//                 </a>

//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   Schedule
//                 </a>

//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   News
//                 </a>


//                 {/* </div> */}
//               </div>

//             </div>

//           </div>
//         </div>

//         <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
//       </div>






//       <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
//         <a

//           href="#"
//           class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all"
//         >
//           Womens T20 World Cup 2024, 20th Match, Group B
//         </a>
//         <div class="p-4 pb-1 bg-white border rounded-xl ">
//           <p href="#" class="block text-red-600 mb-1 text-sm font-bold   antialiased">
//             <span className="animate-blink">●</span> Live
//           </p>
//           <div class="mb-4 flex items-center justify-between">
//             <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
//               14th Match 04:30 AM, 16-Oct ● Sydney, Australia
//             </h5>

//           </div>
//           <div class="">
//             <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">
//                 <img
//                   src="ind.png"
//                   alt="Tania Andrew"
//                   class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                 />
//                 <div>
//                   <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                     India
//                   </h6>

//                 </div>
//               </div>
//               <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                 222/3 (20.0)
//               </h6>
//             </div>

//             <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">
//                 <img
//                   src="engw.png"
//                   alt="John Micheal"
//                   class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                 />
//                 <div>
//                   <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                     England
//                   </h6>

//                 </div>
//               </div>
//               <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                 89-0 (10.1)
//               </h6>
//             </div>
//             <hr />
//             <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">

//                 {/* <div className='flex gap-2'> */}
//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   Series
//                 </a>

//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   Schedule
//                 </a>

//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   News
//                 </a>


//                 {/* </div> */}
//               </div>

//             </div>

//           </div>
//         </div>

//         <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
//       </div>







//       <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
//         <a

//           href="#"
//           class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all"
//         >
//           Womens T20 World Cup 2024, 20th Match, Group B
//         </a>
//         <div class="p-4 pb-1 bg-white border rounded-xl ">
//           <p href="#" class="block text-red-600 mb-1 text-sm font-bold   antialiased">
//             <span className="animate-blink">●</span> Live
//           </p>
//           <div class="mb-4 flex items-center justify-between">
//             <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
//               14th Match 04:30 AM, 16-Oct ● Sydney, Australia
//             </h5>

//           </div>
//           <div class="">
//             <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">
//                 <img
//                   src="ind.png"
//                   alt="Tania Andrew"
//                   class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                 />
//                 <div>
//                   <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                     India
//                   </h6>

//                 </div>
//               </div>
//               <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                 222/3 (20.0)
//               </h6>
//             </div>

//             <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">
//                 <img
//                   src="engw.png"
//                   alt="John Micheal"
//                   class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
//                 />
//                 <div>
//                   <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                     England
//                   </h6>

//                 </div>
//               </div>
//               <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                 89-0 (10.1)
//               </h6>
//             </div>
//             <hr />
//             <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
//               <div class="flex items-center gap-x-3">

//                 {/* <div className='flex gap-2'> */}
//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   Series
//                 </a>

//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   Schedule
//                 </a>

//                 <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
//                   News
//                 </a>


//                 {/* </div> */}
//               </div>

//             </div>

//           </div>
//         </div>

//         <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
//       </div>






//     </div></div>
//   )
// }

// export default HomeScroller


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import HomeScrollCard from './HomeScrollCard'


const HomeScroller = () => {
    const [livematch, setLivematch] = useState([])
    const [schedule, setSchedule] = useState([])
    const [complete, setComplete] = useState([])

    useEffect = () => {

        axios.get('https://rest.entitysport.com/exchange/matches/?token=91e89bd6c7b1f611304ba0f6faf45fd3&date=2024-11-11_2024-11-13&timezone=+5:30&&paged=1&per_page=100')
            .then((res) => {

                console.log(res);
                const dataFromApi = res.data.response.items
                const filteredData = dataFromApi.filter(item => item.status_str
                    === 'Live' && (item.competition.category === "international" || item.competition.category === "women"));


                setLivematch(filteredData)
                // item.competition.category === ""||

                console.log(filteredData, "filtrr")


                const upcomingMatch = dataFromApi.filter(item => item.status_str === "Scheduled" && (item.competition.category === "international" || item.competition.category === "women"));
                console.log(upcomingMatch, "uppp")

                setSchedule(upcomingMatch)


                const completedMatch = dataFromApi.filter(item => item.status_str === "Completed" && (item.competition.category === "international" || item.competition.category === "women"));
                console.log(completedMatch, "compled")

                setComplete(completedMatch)








                // console.log(filteredData, "ressss");
            })

    }

    return (




        <div className='md:flex md:space-x-4 md:overflow-x-scroll mx-auto custom-scrollbar overflow-x-hidden'>
            {
                livematch.length === 0 ? "" : <HomeScrollCard data={livematch} />
            }

            {
                schedule.length === 0 ? "" : <HomeScrollCard data={schedule} />
            }

            {
                complete.length === 0 ? "" : <HomeScrollCard data={complete} />
            }






        </div>
    )
}

export default HomeScroller