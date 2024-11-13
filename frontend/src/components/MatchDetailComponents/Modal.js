 {/* odds from here  */}
 <div className="flex flex-col  items-center  mt-4 py-2 px-1 bg-gray-100 md:w-full">



 <div className=' w-full flex border-b items-center pb-2 justify-between'>
   <div className=" pl-4 font-medium md:text-lg md:w-1/2 ">
     Probability
   </div>

   {/* Buttons for toggling views */}
   <div className=" font-medium md:text-base text-xs gap-4  flex">

     <button
       onClick={() => handleViewChange('odds')}
       className={`md:px-4 px-2 md:py-2 rounded ${view === 'odds' ? 'bg-blue-950 text-white' : 'bg-gray-300 text-blue-950'
         }`}
     >
       Odds View
     </button>

     <button
       onClick={() => handleViewChange('%')}
       className={`md:px-4 px-2 md:py-1 py-1 rounded   ${view === '%' ? 'bg-blue-950 text-white' : 'bg-gray-300 text-blue-950'
         }`}
     >
       % View
     </button>



   </div>


 </div>



 {/* The view content below the buttons */}
 <div className="  w-full  p-4 rounded-md">

   <p className="text-lg">
     {view === '%' ?
       <div>

         {data?.response.match_info.status_str === "Live" ?


           <div className='flex font-medium text-base justify-between'>
             <div>
               <p>{data?.response.match_info.teama.short_name}</p>
               <p>{Math.round(data?.response.teamwinpercentage.team_a_win)}%</p>
             </div>
             <div>
               <p>{data?.response.match_info.teamb.short_name}</p>
               <p>{Math.round(data?.response.teamwinpercentage.team_b_win)}%</p>
             </div>
           </div>

           : ''}



         {data?.response.match_info.status_str === "Live" ?

           <div className='flex w-full'>
             <p style={{ width: `${data?.response.teamwinpercentage.team_a_win}%` }} className='bg-green-500 h-2 '></p>
             <p style={{ width: `${data?.response.teamwinpercentage.team_b_win}%` }} className='bg-red-500 h-2'></p>
           </div>


           : ''}

       </div>




       :

       <div>





         <div className=' font-medium  text-base items-center '>

           {data?.response.teamwinpercentage.team_a_win > data?.response.teamwinpercentage.team_b_win ?

             <div className='flex  items-center justify-between'>

               <p>{data?.response.match_info.teama.short_name} </p>

               {data?.response.live_odds ?


                 <div className='flex gap-2'>

                   <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'> {Math.max(0, Math.round((parseFloat(data?.response.live_odds.matchodds.teama.back) * 100) - 100)).toString().padStart(2, '0')}</p>
                   <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                     {data?.response.live_odds.matchodds.teama.lay ? Math.max(0, Math.round((parseFloat(data?.response.live_odds.matchodds.teama.lay) * 100) - 100))
                       .toString()
                       .padStart(2, '0')
                       : "0"}

                   </p>


                 </div>

                 : ""}


             </div>

             :

             <div className='flex items-center justify-between'>

               <p>{data?.response.match_info.teamb.short_name} </p>



               {data?.response.live_odds.matchodds ?



                 <div className='flex gap-2' >
                   {data?.response.live_odds.matchodds.teamb ?
                     <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'>
                       {Math.max(0, Math.round((parseFloat(data?.response.live_odds.matchodds.teamb.back) * 100) - 100)).toString().padStart(2, '0')}
                     </p>
                     : ''}



                   <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>

                     {data?.response.live_odds.matchodds.teamb.lay ? Math.max(0, Math.round((parseFloat(data?.response.live_odds.matchodds.teamb.lay) * 100) - 100)).toString().padStart(2, '0') : "0"}

                   </p>

                 </div>

                 : ""}




             </div>

           }

           {

             <div className=''>

               {data?.response.session_odds.length > 0 && (
                 <div className=''>
                   {(() => {
                     const lastItem = data.response.session_odds.at(-1);
                     return lastItem ? (
                       <div className='flex mt-3 items-center justify-between'>

                         <p className='text-sm '>{lastItem.title}</p>

                         <div className='flex gap-2'>


                           <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'>
                             {Math.max(0, Math.round((parseFloat(lastItem.lay_condition))))
                               .toString()
                               .padStart(2, '0')}
                           </p>
                           <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                             {lastItem.lay_condition
                               ? Math.max(0, Math.round((parseFloat(lastItem.back_condition))))
                                 .toString()
                                 .padStart(2, '0')
                               : '0'}
                           </p>

                         </div>

                       </div>
                     ) : null;
                   })()}
                 </div>
               )}

             </div>
           }



         </div>

         {/* <div className='flex mt-2 font-medium  text-base items-center justify-between'>

       <p>Team Name B </p>
       <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>6</p>




     </div> */}

       </div>







     }
   </p>
 </div>



</div>