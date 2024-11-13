import React, { useState } from 'react'
import FbConnect from '../FbConnect'
import { Link } from 'react-router-dom'
import { FaShare } from "react-icons/fa";

const CricketNews = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the share popup
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    // Function to copy the link (you can adjust the link you want to copy)
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    return (
        <div className='md:mx-20 mx-4 h-full'>
            <div className='flex px-1 py-10 justify-between'>
                <h1 className='text-2xl font-medium'>Top Stories</h1>
                <input
                    className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm'
                    placeholder='Search...'
                />
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>
                    <div className='grid gap-y-2.5 grid-flow-row py-5 px-6'>
                        <div class="md:flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="viratnews.webp"
                                alt="Tania Andrew"
                                class="relative border inline-block md:h-24 md:w-36 rounded-md object-cover object-center"
                            />

                            <div class=" grid  tracking-normal antialiased">
                                <div className='flex items-center justify-between'>
                                    <Link to="#" className='text-xl pr-6 line-clamp-2 font-semibold'>“Sometimes you make the right call, sometimes you don’t”: Rohit Sharma on batting first against NZ
                                    </Link>


                                    <button onClick={togglePopup} className='hover:bg-gray-100 relative p-2.5 h-10 w-10 rounded-full'>

                                        <FaShare style={{ color: "gray" }} /></button>
                                </div>

                                <span className='text-base text-gray-600 '>1 day ago </span>
                                <span className='text-base pr-12 truncate '>Australia’s dangerous batter Travis Head has signed up with Adelaide</span>

                                {isOpen && (
                                    <div
                                        className='absolute right-0 top-10 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-3 z-10'
                                        style={{ minWidth: '12rem' }}
                                    >
                                        <div className='flex flex-col space-y-2'>
                                            <a
                                                href={`https://wa.me/?text=${window.location.href}`}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='flex items-center text-gray-700 hover:text-green-500'
                                            >
                                                <img
                                                    src='https://cdn-icons-png.flaticon.com/24/124/124034.png'
                                                    alt='WhatsApp'
                                                    className='w-5 h-5 mr-2'
                                                />
                                                WhatsApp
                                            </a>
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='flex items-center text-gray-700 hover:text-blue-400'
                                            >
                                                <img
                                                    src='https://cdn-icons-png.flaticon.com/24/733/733579.png'
                                                    alt='Twitter'
                                                    className='w-5 h-5 mr-2'
                                                />
                                                Twitter
                                            </a>
                                            <button
                                                onClick={copyLink}
                                                className='flex items-center text-gray-700 hover:text-blue-600'
                                            >
                                                <img
                                                    src='https://cdn-icons-png.flaticon.com/24/54/54702.png'
                                                    alt='Copy Link'
                                                    className='w-5 h-5 mr-2'
                                                />
                                                Copy Link
                                            </button>
                                        </div>
                                    </div>
                                )}


                            </div>

                        </div>












                    </div>





                </div>

                <FbConnect />


            </div>


        </div>
    )
}

export default CricketNews






