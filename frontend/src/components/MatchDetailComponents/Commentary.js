import React, { useEffect, useRef, useState } from 'react'

// import myAudio from '/FOUR.mp3'

import { Link } from 'react-router-dom'
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { Player } from '@lottiefiles/react-lottie-player';
import { AiOutlineInfoCircle } from "react-icons/ai";
import Probability from './Probability';



const Commentary = ({ data, balldata }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [ballEvent, setBallEvent] = useState(null);
  const scrollContainerRef = useRef(null);





  // Define a mapping from ball event string to audio file
  const audioMap = {
    'Ball Chalu': '/BALL START BALL.mp3',
    "dot": '/ZERO RUN.mp3',
    '1': '/SINGLE ONE RUN.mp3',
    '2': '/DOUBLE 2 RUN.mp3',
    '3': '/tHREE RUN.mp3',
    'four': '/FOUR.mp3',
    'six': '/SIX.mp3',
    "Caught": '/WICKET.mp3',
    'Bowled': '/WICKET.mp3',
    "LBW": '/WICKET.mp3',
    'wide': '/WIDEE.mp3',
    'no ball': '/NO BALL.mp3',
    'Over': '/OVER.mp3',
    'New Batter': "",
    'Ball in Air': "",
    'Match End': "",
    "bye + 1 run": "",
    "Innings Break": "",
  };

  const scrollContainer = scrollContainerRef.current;
  if (scrollContainer) {
    scrollContainer.scrollLeft = scrollContainer.scrollWidth;
  }

  // useEffect(() => {
  //   // Scroll to the right when the component mounts
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
  //   }


  // }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      } else {
        if (!isMuted && userInteracted && audioRef.current) {
          audioRef.current.play().catch((err) => console.error('Audio playback error:', err));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause(); // Cleanup audio on component unmount
      }
    };
  }, [isMuted, userInteracted]);

  // Play audio based on ball event response after user interaction
  useEffect(() => {
    if (userInteracted && balldata?.response.ball_event) {
      const audioSrc = audioMap[balldata.response.ball_event];
      if (audioSrc) {
        if (audioRef.current) {
          audioRef.current.pause(); // Stop any currently playing audio
        }
        const newAudio = new Audio(audioSrc);
        newAudio.muted = isMuted; // Set mute state
        audioRef.current = newAudio; // Save current audio instance
        newAudio.play().catch((err) => console.error('Audio playback error:', err));
      }
    }
  }, [balldata, isMuted, userInteracted]);



  const handleClick = () => {
    setIsMuted((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; // Toggle mute state for current audio
    }
  };

  const handleUserInteraction = () => {
    setUserInteracted(true);
  };



  const [view, setView] = useState('odds');

  // Click handlers for switching views
  const handleViewChange = (viewType) => {
    setView(viewType);
    // setView(!viewType)
  };


  var Data = [...(data?.response.live.commentaries || [])].reverse()



  const formatUrl = (text) => {
    return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
  };

  return (

    // 6101520   ,, 102030404550,,,,,6101520   ,, 102030404550,,,,,


    <div className=''>

      {data?.response.live ?


        <div>

          <div className='md:w-full md:flex grid grid-cols-1 md:grid-cols-2 gap-4 '>

            <div className='justify-between md:order-1 order-2 text-blue-950   dark:bg-black dark:text-white w-full md:w-1/2'>



              {data?.response?.match_info?.status_str === "Live" ? <>

                {
                  data?.response.live?.live_inning?.batting_team_id === data?.response.match_info.teama.team_id ?

                    <><div className="flex items-center md:justify-between  gap-4 pb-4 last:pb-0">
                      <div className="flex items-center gap-x-5">
                        <img
                          src={data?.response.match_info.teama.logo_url}
                          alt="Tania Andrew"
                          className="relative inline-block h-10 w-10 border rounded-full object-cover object-center" />
                        <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal  antialiased">
                          {data?.response.match_info.teama.short_name}
                        </p>

                      </div>
                      <p className="block font-sans md:text-base text-xs  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                        {data?.response.match_info.teama.scores_full}

                      </p>


                    </div><div className='h-4 space-y-2'></div></>

                    :
                    <><div className="flex  items-center md:justify-between  gap-4   last:pb-0">
                      <div className="flex items-center gap-x-5">
                        <img
                          src={data?.response.match_info.teamb.logo_url}
                          alt="John Micheal"
                          className="relative inline-block h-10 w-10 border rounded-full object-cover object-center" />
                        <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                          {data?.response.match_info.teamb.short_name}
                        </p>

                      </div>
                      <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                        {data?.response.match_info.teamb.scores_full}


                      </p>

                    </div><div className='h-4 space-y-2'></div></>


                }

                {
                  data?.response.live?.live_inning?.fielding_team_id === data?.response.match_info.teama.team_id ?

                    <div className="flex items-center md:justify-between  gap-4 pb-4 last:pb-0">
                      <div className="flex items-center gap-x-5">
                        <img
                          src={data?.response.match_info.teama.logo_url}
                          alt="Tania Andrew"
                          className="relative inline-block h-10 w-10 border rounded-full object-cover object-center"
                        />
                        <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal  antialiased">
                          {data?.response.match_info.teama.short_name}
                        </p>

                      </div>
                      <p className="block font-sans md:text-base text-xs  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                        {data?.response.match_info.teama.scores_full}

                      </p>
                    </div>



                    :
                    <div className="flex items-center md:justify-between  gap-4  pt-2 last:pb-0">
                      <div className="flex items-center gap-x-5">
                        <img
                          src={data?.response.match_info.teamb.logo_url}
                          alt="John Micheal"
                          className="relative inline-block h-10 w-10 border rounded-full object-cover object-center"
                        />
                        <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                          {data?.response.match_info.teamb.short_name}
                        </p>

                      </div>
                      <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                        {data?.response.match_info.teamb.scores_full}


                      </p>
                    </div>

                }
              </>

                : <>

                  <div className="flex items-center md:justify-between  gap-4 pb-4 last:pb-0">
                    <div className="flex items-center gap-x-5">
                      <img
                        src={data?.response.match_info.teama.logo_url}
                        alt="Tania Andrew"
                        className="relative inline-block h-10 w-10 border rounded-full object-cover object-center"
                      />
                      <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal  antialiased">
                        {data?.response.match_info.teama.short_name}
                      </p>

                    </div>
                    <p className="block font-sans md:text-base text-xs  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                      {data?.response.match_info.teama.scores_full}

                    </p>
                  </div>

                  <div className='h-2 space-y-2'></div>


                  <div className="flex items-center md:justify-between  gap-4  pt-4 last:pb-0">
                    <div className="flex items-center gap-x-5">
                      <img
                        src={data?.response.match_info.teamb.logo_url}
                        alt="John Micheal"
                        className="relative inline-block h-10 w-10 border rounded-full object-cover object-center"
                      />
                      <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                        {data?.response.match_info.teamb.short_name}
                      </p>

                    </div>
                    <p className="block font-sans md:text-base text-xs font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                      {data?.response.match_info.teamb.scores_full}


                    </p>
                  </div>

                </>}


            </div>

            {/* {data?.response.live.status_str === "Live" ?  */}

            <div className=' md:w-1/2 py-5 md:order-2 order-1 md:py-0 text-3xl font-bold  flex items-center justify-center bg-blue-950 text-white text-center'>

              <div className='' onClick={handleUserInteraction}>
                <div className='absolute top-2 right-4 text-white text-base cursor-pointer' onClick={handleClick}>
                  {isMuted ? <FaVolumeMute style={{ fontSize: '16px' }} /> : <FaVolumeUp style={{ fontSize: '16px' }} />}
                </div>


                {balldata?.response.ball_event === "four" ? (
                  "4"
                ) : balldata?.response.ball_event === "six" ? (
                  "6"
                ) : balldata?.response.ball_event === "dot" ? (
                  "0"
                ) : (
                  balldata?.response.ball_event || data?.response.live.game_state_str
                )}

              </div>


            </div>

            {/* : ""} */}







          </div>

          {data?.response.live?.live_score ?

            <div className='flex text-blue-950 gap-3'>
              <p className=' font-medium md:text-base text-xs  mt-2'>CRR:  {data?.response.live?.live_score.runrate}</p>
              <p className=' font-medium md:text-base text-xs mt-2 '>RRR: {data?.response.live?.live_score?.required_runrate ? data?.response.live.live_score?.required_runrate : "0"}</p>

              <p className=' font-medium md:text-base text-xs mt-2 '>Target: {data?.response.live?.live_score.target}</p>
            </div>
            :

            ""}

          <p className=' font-medium md:text-base text-xs mt-2  text-red-600 '>{data?.response.live.status_note}</p>

          <div className='flex mt-2 overflow-x-auto pr-4 scrollbar-hide custom-scrollbar' ref={scrollContainerRef}>
            {Data.reverse().map((item, index) => (

              item.event == "overend" ? (

                <div key={index} className='items-center  flex   '>



                  <div className='flex items-center text-sm font-medium'>
                    <span className='pr-2'>=</span> {item.runs}
                  </div>

                  <div className='border-l border-gray-400 h-6 mx-2'></div>


                  <div className=' flex items-center text-sm font-medium px-2 '>
                    <p>Over</p>-<p>{(item.over) + 1}</p>
                  </div>
                </div>


              ) :


                <div className=''>

                  <div key={index} className=' flex   px-2.5 pt-4'>
                    <div className=' font-medium  pb-4 '>

                      {item.score === "w" ? <p className='border bg-red-700 text-xs w-8 h-8 rounded-full text-white flex items-center justify-center'>{item.score}</p> :

                        <p className='border bg-gray-100 w-8 h-8 text-xs rounded-full flex items-center justify-center'>{item.score}</p>}

                    </div>
                  </div>

                </div>

            ))}
          </div>



          {/* odds from here  */}          

          <Probability data={data}/>






          <div className='hidden mt-2 w-full border'>
            <img src='/playerofmatch.png' className='w-24  h-24' />
            <div className=' pl-4 bg-gray-100 items-center grid w-full'>
              <p>Player of the match</p>

              <div className="flex items-center pl-4  gap-4">
                <img
                  src="/viratkohli.png"
                  alt="John Micheal"
                  className="relative inline-block h-10 w-10 rounded-full object-cover object-center"
                />

                <Link className="block font-sans hover:underline text-blue-600 text-lg font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  Virat Kohli
                </Link>


              </div>


            </div>






          </div>



          {/* batting */}

          <div className='md:flex w-full mt-6'>


            <div className='md:w-2/3 w-full'>

              <div className="relative  overflow-x-auto ">
                <table className="w-full text-center  rtl:text-right text-gray-950 ">
                  <thead className="bg-blue-950 text-white   ">
                    <tr>
                      <th scope="col" className=" px-2 py-2  font-normal">
                        Batter
                      </th>


                      <th scope="col" className=" font-normal  ">
                        R
                      </th>

                      <th scope="col" className=" font-normal  ">
                        B
                      </th>

                      <th scope="col" className=" font-normal ">
                        4s
                      </th>

                      <th scope="col" className="font-normal ">
                        6s
                      </th>


                      <th scope="col" className=" font-normal  ">
                        SR
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {data?.response.live.batsmen ?

                      <>

                        {data?.response.live?.batsmen.map((item, index) => (
                          item ? (
                            <tr key={index} className="border-b border-gray-200 text-center align-text-top dark:border-gray-700">
                              <td scope='row' className='text-blue-600'>
                                {index === 0 ? (
                                  <Link to={`/cricket-player-detail/${item.batsman_id}/${(formatUrl(item.name))}`}

                                    className='hover:underline text-left flex gap-2 items-center justify-center'>
                                    {item.name}
                                    <img className='h-3 w-3' src='/bat.png' alt='bat icon' />
                                  </Link>
                                ) : (
                                  <Link to={`/cricket-player-detail/${item.batsman_id}/${(formatUrl(item.name))}`} className='hover:underline text-left flex gap-2 items-center justify-center'>
                                    {item.name}
                                  </Link>
                                )}
                              </td>

                              <td scope='row' className=''>
                                {item.runs}
                              </td>

                              <td scope='row' className=''>
                                {item.balls_faced}
                              </td>

                              <td scope='row' className=''>
                                {item.fours}
                              </td>

                              <td scope='row' className=''>
                                {item.sixes}
                              </td>

                              <td scope='row' className=''>
                                {item.strike_rate}
                              </td>
                            </tr>
                          ) : null
                        ))}




                      </>


                      : ""}



                  </tbody>

                </table>
              </div>

              {/* 2nd table  */}
              <div className="relative  overflow-x-auto ">
                <table className=" w-full text-center   rtl:text-right text-gray-950 ">
                  <thead className="bg-blue-950 text-white   ">
                    <tr>
                      <th scope="col" className="px-2  py-2 font-normal ">
                        Bowler
                      </th>

                      <th scope="col" className="font-normal ">
                        O
                      </th>

                      <th scope="col" className="font-normal ">
                        M
                      </th>

                      <th scope="col" className="font-normal ">
                        R
                      </th>

                      <th scope="col" className="font-normal ">
                        W
                      </th>


                      <th scope="col" className="font-normal ">
                        ECO
                      </th>

                    </tr>
                  </thead>

                  <tbody>

                    {data?.response.live.bowlers ?

                      <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                        <td scope='row' className='  text-blue-600'>

                          {data?.response.live.bowlers[0]?.bowler_id ?

                            <Link to={`/cricket-player-detail/${data?.response.live.bowlers[0].bowler_id}/${(formatUrl(data?.response.live.bowlers[0].name))}`} className='hover:underline flex gap-2 items-center  justify-center text-sm'>{data?.response.live.bowlers[0] ? data?.response.live.bowlers[0].name : ""}<img className='h-3 w-3' src='/ball.jpg' /></Link> : ''}

                        </td>

                        <td scope='row' className="">
                          {data?.response.live.bowlers[0]?.overs}
                        </td>

                        <td className=''>
                          {data?.response.live.bowlers[0]?.maidens}
                        </td>

                        <td className=''>
                          {data?.response.live.bowlers[0]?.runs_conceded}
                        </td>

                        <td className=''>
                          {data?.response.live.bowlers[0]?.wickets}
                        </td>

                        <td className=''>
                          {data?.response.live.bowlers[0]?.econ}
                        </td>



                      </tr>

                      : ""}











                  </tbody>
                </table>
              </div>

            </div>

            <div className=' border-l mx-4 bg-white '>

            </div>

            {data?.response.live.live_inning ?



              <div className='w-full md:w-1/3 text-sm border bg-gray-100'>



                <p className='bg-blue-950 font-normal text-white py-2  px-2  '>Key Stats</p>

                <p className='py-2 gap-2 px-2'><span className='font-medium text-sm'>Partership:</span> {data?.response.live.live_inning.current_partnership.runs}({data?.response.live.live_inning.current_partnership.balls})</p>

                {data?.response.live.live_inning.last_wicket.name ?

                  <p className='pb-2 px-2'><span className='font-medium text-sm'>Last Wickets:</span> {data?.response.live.live_inning.last_wicket.name}{data?.response.live.live_inning.last_wicket.how_out}{data?.response.live.live_inning.last_wicket.runs}({data?.response.live.live_inning.last_wicket.balls}) ‐ {data?.response.live.live_inning.last_wicket.score_at_dismissal}/{data?.response.live.live_inning.last_wicket.number} in {data?.response.live.live_inning.last_wicket.overs_at_dismissal}ov</p> : null

                }


                <p className='pb-2 px-2'><span className='font-medium text-sm'>Toss:</span> {data?.response.match_info.toss.text}</p>


              </div>

              : null}




          </div>








          {/* 
          <div className='mt-2 flex gap-x-1 ml-4'>

            <p>Recent :</p>
            <p>{data?.response.live.live_inning?.recent_scores}</p>

          </div> */}






          {Data.map((item, index) => (

            item.event == "overend" ? (


              <div key={index} className='mt-6 bg-gray-100  border w-full p-4'>

                <div className='flex border-b md:text-base text-xs  font-medium pb-1 '>
                  <p className='w-72'>Over-{item.over} </p>
                  <p className=' '>{item.commentary}</p>


                </div>






              </div>


            ) :


              <div className='mt-6'>


                <div key={index} className='mt-6 flex   gap-x-3  border-b  px-4 pt-4'>
                  <div className=' font-medium pb-4 '>
                    <p className='mb-2 md:text-base text-xs'>{item.over}.{item.ball} </p>
                    <p className='border bg-blue-950 md:text-base text-xs w-8 h-8 rounded-full text-white flex items-center justify-center'>{item.score}</p>

                  </div>

                  <div className='flex w-full '>
                    <p className=' md:text-base text-xs '>{item.commentary}</p>
                  </div>

                </div>


              </div>

          ))}



        </div>



        : <p className=' font-medium flex  justify-center text-center text-md mt-2  text-red-600 '>

          {/* <div className="flex  justify-center ">
            <div className="w-4 h-4 border-2 border-blue-950 border-solid border-t-transparent rounded-full animate-spin"></div>
          </div> */}

          <img className='size-20' src="/Animation.gif" />





        </p>}


    </div>


  )
}

export default Commentary