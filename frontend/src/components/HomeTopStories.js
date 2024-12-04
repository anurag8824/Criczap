import React, { useEffect, useRef, useState } from 'react';
import HomeTopNews from './HomeTopNews';
import { Link } from 'react-router-dom';
import axios from 'axios';



const HomeTopStories = () => {




  return (
    <div><div className='rounded-xl border bg-white px-3 py-3'>
      <div className="text-2xl text-blue-950 font-medium border-b pb-3">Top Stories</div>

      <div class="flex  items-center justify-between pb-3 pt-3 last:pb-0">
        <div class="grid items-center gap-x-3">


          <div class=" hidden border-b py-4 leading-relaxed tracking-normal antialiased ">
            <div className="relative" style={{ paddingBottom: "56.25%", height: "0", overflow: "hidden" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_sztki-L7bg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>
            </div>

            <div class="font-medium text-blue-950 hover:underline">IND vs NZ 1st Test: 4 Players OUT on 0 Before Lunch | KIWI Bowlers Sheer Dominance!</div>
            <div class="text-sm text-gray-500 font-normal">5 Hours Ago</div>


          </div>



          <HomeTopNews />






          <Link to="/cricket-news" class="items-center mt-2 text-center text-gray-500  justify-between block tracking-normal antialiased hover:underline hover:text-blue-950">
            See More
          </Link>



        </div>



      </div>



    </div></div>
  )
}

export default HomeTopStories