import React from 'react'
import { useState } from "react"

const Probability = ({ data }) => {

    const [view, setView] = useState('odds');



    const handleViewChange = (viewType) => {
        setView(viewType);
        // setView(!viewType)
    };
    return (
        <div>
            {/* odds from here  */}


            <div className="flex flex-col  items-center  mt-2 py-2 px-1 bg-gray-100 md:w-full">



                <div className='w-full flex  border-b items-center pb-2 justify-between'>
                    <div className=" pl-4 flex gap-2 text-sm md:w-1/2 ">
                        Probability
                        {/* <button onClick={() => handleViewChange('full')} className='underline'><AiOutlineInfoCircle className='h-4 w-4' />
    </button> */}

                    </div>

                    {/* Buttons for toggling views */}
                    <div className=" text-sm gap-4  flex">

                        <button
                            onClick={() => handleViewChange('odds')}
                            className={`md:px-2  px-1 md:py-1 rounded ${view === 'odds' ? 'bg-blue-950 text-white' : 'bg-gray-300 text-blue-950'
                                }`}
                        >
                            Odds View
                        </button>

                        <button
                            onClick={() => handleViewChange('%')}
                            className={`md:px-2  px-1 md:py-1  rounded   ${view === '%' ? 'bg-blue-950 text-white' : 'bg-gray-300 text-blue-950'
                                }`}
                        >
                            % View
                        </button>





                    </div>


                </div>



                {/* The view content below the buttons */}
                <div className="  w-full  px-4  rounded-md">

                    <p className="text-lg">
                        {view === '%' ?

                            (<div>

                                {data?.response.match_info.status_str === "Live" ?


                                    <div className='flex  text-xs justify-between'>
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
                                        <p style={{ width: `${data?.response.teamwinpercentage.team_a_win}%` }} className='bg-green-500 h-0.5  '></p>
                                        <p style={{ width: `${data?.response.teamwinpercentage.team_b_win}%` }} className='bg-red-500 h-0.5 '></p>
                                    </div>


                                    : ''}

                            </div>)

                            :

                            <div>





                                {data.response.match_info.format_str === "Test" ?

                                    <>

                                        <div className=' pt-1 space-y-1  text-xs items-center '>

                                            <div className='flex  items-center justify-between'>

                                                <p>{data?.response?.match_info?.teama?.short_name} </p>

                                                {data?.response?.live_odds ?


                                                    <div className='flex gap-2'>

                                                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'> {Math.max(0, ((parseFloat(data?.response?.live_odds?.matchodds?.teama?.back)))).toString().padStart(2, '0')}</p>
                                                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                                                            {data?.response?.live_odds?.matchodds?.teama.lay ? Math.max(0, ((parseFloat(data?.response?.live_odds?.matchodds?.teama?.lay))))
                                                                .toString()
                                                                .padStart(2, '0')
                                                                : "0"}

                                                        </p>


                                                    </div>

                                                    : "Suspended..."}





                                            </div>


                                            <div className='flex items-center justify-between'>

                                                <p>{data?.response?.match_info?.teamb?.short_name} </p>

                                                {data?.response?.live_odds?.matchodds ?



                                                    <div className='flex gap-2' >
                                                        {data?.response?.live_odds?.matchodds?.teamb ?
                                                            <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'>
                                                                {Math.max(0, ((parseFloat(data?.response?.live_odds?.matchodds?.teamb?.back)))).toString().padStart(2, '0')}
                                                            </p>
                                                            : ''}



                                                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>

                                                            {data?.response?.live_odds?.matchodds?.teamb?.lay ? Math.max(0, ((parseFloat(data?.response?.live_odds?.matchodds?.teamb?.lay)))).toString().padStart(2, '0') : "0"}

                                                        </p>

                                                    </div>

                                                    : "Suspended..."}




                                            </div>

                                            <div className='flex items-center justify-between'>

                                                <p>Draw </p>

                                                {data?.response?.live_odds?.matchodds ?



                                                    <div className='flex gap-2' >
                                                        {data?.response?.live_odds?.matchodds?.draw ?
                                                            <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'>
                                                                {Math.max(0, Math.round((parseFloat(data?.response?.live_odds?.matchodds?.draw?.back)))).toString().padStart(2, '0')}
                                                            </p>
                                                            : ''}



                                                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>

                                                            {data?.response?.live_odds?.matchodds?.draw?.lay ? Math.max(0, Math.round((parseFloat(data?.response?.live_odds?.matchodds?.draw?.lay)))).toString().padStart(2, '0') : "0"}

                                                        </p>

                                                    </div>

                                                    : "Suspended..."}




                                            </div>




                                            {/* feature for test  */}
                                            <div className=''>
                                                {data?.response?.featured_session ?
                                                    <>

                                                        {data?.response?.featured_session?.map((item, index) => (
                                                            item ? (


                                                                <div className='flex items-center justify-between'>
                                                                    <p>{item.title.split(' ').slice(0, 2).join(' ')} </p>
                                                                    <div className='flex gap-2'>

                                                                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'> {Math.max(0, Math.round((parseFloat(item.lay_condition)))).toString().padStart(2, '0')}</p>
                                                                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                                                                            {item.back_condition ? Math.max(0, Math.round((parseFloat(item.back_condition))))
                                                                                .toString()
                                                                                .padStart(2, '0')
                                                                                : "0"}

                                                                        </p>


                                                                    </div>
                                                                </div>



                                                            ) : ""
                                                        ))}

                                                        <div className='flex items-center justify-between'>


                                                            <p>RXB</p>
                                                            {data?.response?.featured_session.length > 0 ? 

                                                            <div className='flex gap-2'>

                                                                <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'>
                                                                    {data?.response?.featured_session[0]?.back_condition ? Math.max(0, Math.round((parseFloat(data?.response?.featured_session[0]?.back_condition)) - (parseFloat(data?.response?.live?.live_score?.runs))))
                                                                        .toString()
                                                                        .padStart(2, '0')
                                                                        : "0"}

                                                                </p>

                                                                <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                                                                    {Math.max(
                                                                        0,
                                                                        Math.floor(
                                                                            (parseFloat(data?.response?.featured_session[0]?.over) || 0) -
                                                                            (parseFloat(data?.response?.live?.live_score?.overs) || 0)
                                                                        ) * 6 +
                                                                        (parseFloat(String(data?.response?.live?.live_score?.overs || "0.0").split('.')[1] || "0") || 0)
                                                                    ).toString().padStart(2, '0')}
                                                                </p>


                                                            </div>
                                                            : <p>Suspended..</p>}

                                                        </div>




                                                    </>
                                                    : ""}
                                            </div>




                                        </div>
                                    </>


                                    :
                                    <>

                                        <div className=' pt-1  text-xs items-center '>



                                            {data?.response.teamwinpercentage?.team_a_win > data?.response.teamwinpercentage?.team_b_win ?

                                                <div className='flex pb-1 items-center justify-between'>

                                                    <p>{data?.response?.match_info?.teama.short_name} </p>

                                                    {data?.response?.live_odds ?


                                                        <div className='flex gap-2'>

                                                            <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'> {Math.max(0, Math.round((parseFloat(data?.response?.live_odds?.matchodds?.teama?.back) * 100) - 100)).toString().padStart(2, '0')}</p>
                                                            <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                                                                {data?.response?.live_odds?.matchodds?.teama?.lay ? Math.max(0, Math.round((parseFloat(data?.response?.live_odds?.matchodds?.teama?.lay) * 100) - 100))
                                                                    .toString()
                                                                    .padStart(2, '0')
                                                                    : "0"}

                                                            </p>


                                                        </div>

                                                        : "Suspended..."}





                                                </div>

                                                :

                                                <div className='flex items-center justify-between'>

                                                    <p>{data?.response?.match_info?.teamb?.short_name} </p>



                                                    {data?.response?.live_odds?.matchodds ?



                                                        <div className='flex gap-2' >
                                                            {data?.response.live_odds?.matchodds?.teamb ?
                                                                <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'>
                                                                    {Math.max(0, Math.round((parseFloat(data?.response.live_odds?.matchodds?.teamb?.back) * 100) - 100)).toString().padStart(2, '0')}
                                                                </p>
                                                                : ''}



                                                            <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>

                                                                {data?.response.live_odds?.matchodds?.teamb?.lay ? Math.max(0, Math.round((parseFloat(data?.response.live_odds?.matchodds?.teamb?.lay) * 100) - 100)).toString().padStart(2, '0') : "0"}

                                                            </p>

                                                        </div>

                                                        : "Suspended..."}




                                                </div>

                                            }



                                            <div className=' '>
                                                {data?.response?.featured_session ?

                                                    <>


                                                        {data?.response?.featured_session?.map((item, index) => (
                                                            item ? (

                                                                <div key={index} className='flex pb-1 items-center justify-between'>

                                                                    <p>{item.title.split(' ').slice(0, 2).join(' ')} </p>
                                                                    <div className='flex gap-2'>
                                                                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'> {Math.max(0, Math.round((parseFloat(item.lay_condition)))).toString().padStart(2, '0')}</p>
                                                                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                                                                            {item.back_condition ? Math.max(0, Math.round((parseFloat(item.back_condition))))
                                                                                .toString()
                                                                                .padStart(2, '0')
                                                                                : "0"}

                                                                        </p>


                                                                    </div>



                                                                </div>







                                                            ) : ""
                                                        ))}

                                                        <div className='flex items-center justify-between'>


                                                            <p>RXB</p>
                                                            {data?.response?.featured_session.length > 0 ? 

                                                            <div className='flex gap-2'>


                                                                <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'>
                                                                    {data?.response?.featured_session[0]?.back_condition ? Math.max(0, Math.round((parseFloat(data?.response?.featured_session[0]?.back_condition)) - (parseFloat(data?.response?.live?.live_score?.runs))))
                                                                        .toString()
                                                                        .padStart(2, '0')
                                                                        : "0"}

                                                                </p>

                                                                <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                                                                    {Math.max(
                                                                        0,
                                                                        Math.floor(
                                                                            (parseFloat(data?.response?.featured_session[0]?.over) || 0) -
                                                                            (parseFloat(data?.response?.live?.live_score?.overs) || 0)
                                                                        ) * 6 +
                                                                        (parseFloat(String(data?.response?.live?.live_score?.overs || "0.0").split('.')[1] || "0") || 0)
                                                                    ).toString().padStart(2, '0')}
                                                                </p>








                                                            </div>
                                                             : <p>Suspended..</p>}

                                                        </div>

                                                    </>
                                                    : ""}
                                            </div>




                                        </div>

                                    </>

                                }



                            </div>








                        }


                    </p>
                </div>



            </div>
        </div>
    )
}

export default Probability