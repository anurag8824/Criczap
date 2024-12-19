import React from 'react'
import { Link } from 'react-router-dom'
import { LuHome } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { LiaTrophySolid } from "react-icons/lia";
import { BiSolidVideos } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { PiRankingBold } from "react-icons/pi";
import BackToTop from './BackToTop';
import ThemeProvider from '../ThemeProvider';
import TranslateWideget from '../TranslateWidget'







const Footer = () => {
    return (

        <footer class="bg-blue-950  w-full dark:bg-gray-900">

            <div class="mx-auto w-full md:w-full hidden sm:block max-w-screen-xl p-4 py-6 md:py-8">
                <div class="sm:flex sm:justify-between grid grid-col-2  gap-6 ">



                    <div className='space-y-4'>

                        {/* 1st Column - Get the App */}
                        <div class="text-base  flex gap-4 items-center    text-white font-medium  overflow-hidden">
                            {/* <p class="mb-4 flex-nowrap">GET THE APP ON</p> */}
                            <p class=" flex-nowrap whitespace-nowrap  border-r uppercase pr-4">GET THE APP ON</p>


                            <div class="flex gap-x-2  items-center ">
                                <img
                                    src="/android.png"
                                    alt="Android App"
                                    class="h-auto w-auto"
                                />
                                <h6 class="text-base font-normal text-blue-gray-900">
                                    Android App
                                </h6>
                            </div>

                            <div class="flex gap-x-2  items-center ">
                                <img
                                    src="/ios.png"
                                    alt="iOS App"
                                    class="h-auto w-auto"
                                />
                                <h6 class="text-base font-normal text-blue-gray-900">
                                    iOS
                                </h6>
                            </div>
                        </div>

                        {/* 2nd Column - Follow Us */}
                        <div class="text-base flex gap-4 items-center  text-white font-medium    overflow-hidden">
                            <p class="flex-nowrap whitespace-nowrap border-r  uppercase pr-6">Follow Us on</p>

                            <div class="flex items-center gap-x-3 ">
                                <img
                                    src="/youtube.png"
                                    alt="YouTube"
                                    class="h-auto w-auto"
                                />
                                <a href='#' class="text-base font-normal text-blue-gray-900">
                                    YouTube
                                </a>
                            </div>

                            <div class="flex items-center gap-x-6 ">
                                <img
                                    src="/facebook.png"
                                    alt="Facebook"
                                    class="h-auto w-auto"
                                />
                                <a href='#' class="text-base font-normal text-blue-gray-900">
                                    Facebook
                                </a>
                            </div>

                            <div class="flex items-center gap-x-6">
                                <img
                                    src="/instagram.png"
                                    alt="Instagram"
                                    class="h-auto w-auto"
                                />
                                <a href='#' class="text-base font-normal text-blue-gray-900">
                                    Instagram
                                </a>
                            </div>
                        </div>

                        <div className='ffflex hidden  gap-4 w-full'>
                            <h2 class="mb-6  text-base uppercase  text-white border-r pr-11 font-semibold">Quick Links</h2>
                            <ul className="text-white flex font-normal space-x-4">

                                <li>
                                    <Link to="cricket-schedule" className="hover:underline">Schedule</Link>
                                </li>
                                <li>
                                    <Link to="cricket-series" className="hover:underline">Series</Link>
                                </li>
                                <li>
                                    <Link to="cricket-news" className="hover:underline">News</Link>
                                </li>
                                <li>
                                    <Link to="cricket-videos" className="hover:underline">Videos</Link>
                                </li>

                            </ul>

                        </div>

                    </div>


                    {/* Logo */}
                    <div class="mb-6 sm:w-1/4   md:mb-0">
                        <a href="/" className="">
                            <img src="/logoblack.png" className="  me-3" alt="Crick Logo" />
                        </a>
                    </div>

                    {/* 3rd Column - Quick Links */}


                </div>

                <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className='lg:flex grid grid-row-3 mx-auto justify-center'>
                    <div className='text-white px-4 mx-auto'>© Copyright 2024 Criczap All rights reserved.</div>
                    <div className=' justify-between '>
                        {/* <Link to="#" className='hover:underline text-white  md:no-underline md:border-r px-2 md:px-6'>About Us</Link> */}
                        <Link to="privacy" className='hover:underline text-white md:border-r  md:px-6'>Privacy Policy</Link>
                        <Link to="tos" className='hover:underline text-white md:border-r px-2 md:px-6'>Terms of Use</Link>
                        {/* <Link to="#" className='hover:underline text-white md:border-r md:px-6'>Grievance</Link> */}
                    </div>
                    <div className='text-white mx-auto px-4'>Version 1.1.1</div>
                </div>
            </div>

            <div className='block fixed bottom-0  w-full     sm:hidden dark:bg-gray-800 bg-blue-950 text-white '>

                <div className='flex justify-between font-medium text-sm px-2 py-2'>
                    <Link to="/" className='justify-center  items-center flex flex-col  text-center' >
                        <LuHome className='w-6 h-6' />
                        <p>Home</p>
                    </Link>

                    <Link to="cricket-schedule" className='justify-center items-center flex flex-col  text-center' >
                        <SlCalender className='w-6  h-6' />
                        <p>Matches</p>
                    </Link>

                    <Link to="cricket-series" className='justify-center items-center flex flex-col  text-center'>
                        <LiaTrophySolid className='w-6 h-6' />
                        <p>Series</p>

                    </Link>

                    <Link to="cricket-news" className='justify-center items-center flex flex-col  text-center'>
                        <BiSolidVideos className='w-6 h-6' />
                        <p>News</p>

                    </Link>

                    <Link to="cricket-rankings" className='justify-center  items-center flex flex-col  text-center'>
                        <PiRankingBold
                            className='w-6 h-6' />
                        <p>Ranking</p>

                    </Link>

                </div>




            </div>

            <BackToTop />
            <ThemeProvider/>
            <TranslateWideget/>




        </footer>





    )
}

export default Footer