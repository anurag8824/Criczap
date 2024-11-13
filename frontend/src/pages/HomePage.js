import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CustomScrollbar.css';
import FbConnect from '../components/FbConnect';
import { Link } from 'react-router-dom';
import CricketNews from './test';
import HomeScroller from '../components/HomeScroller';
import HomePopularSeries from '../components/HomePopularSeries';
import HomeTopStories from '../components/HomeTopStories';
import HomePolls from '../components/HomePolls';
import HomeAllTeam from './HomeAllTeam';
import HomeDropdown from '../components/HomeDropdown';


const HomePage = () => {














  return (

    <div className=''>
      {/* <HomeDropdown /> */}


      <div className='h-full md:mx-16 m-2 mt-4'>

        <HomeScroller />



        <HomeAllTeam />


        {/* <div class="text-2xl font-medium"></div> */}





        <div className='md:flex grid-col-3 mx-auto grid md:justify-between gap-y-4'>


          <HomePopularSeries />

          <div class=" lg:w-3/6 h-fit mx-auto space-y-6">

            <HomeTopStories />

            <HomePolls />

          </div>

          <FbConnect />


        </div>









      </div>

    </div>




  )
}

export default HomePage