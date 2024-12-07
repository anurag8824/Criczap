import React, { useEffect, useRef, useState } from 'react';
import FbConnect from '../components/FbConnect';
import { Link } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import { formatDistanceToNow, isAfter, addDays, format } from 'date-fns';

import axios from "axios"

const CricketVideos = () => {
    const backUrl = process.env.REACT_APP_BACK_URL
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    const popupRef = useRef(null);  // Reference for the popup element

    const formatCreatedAt = (createdAt) => {
        const createdDate = new Date(createdAt);
        const sevenDaysFromNow = addDays(createdDate, 7);
        const now = new Date();

        if (isAfter(sevenDaysFromNow, now)) {
            return `${formatDistanceToNow(createdDate, { addSuffix: true })}`;
        }

        return format(createdDate, 'EEEE dd-MMM-yyyy');
    };

    // Function to handle share button click
    const handleShareClick = (dropdown) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));
    };

    // Function to copy the link
    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };



    // Close the popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close popup if the clicked element is not within the popup or share button
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    useEffect(() => {
        axios.get(`${backUrl}/admin/allvideos`)
            .then((res) => {
                console.log(res, "list of videos")
                if (Array.isArray(res.data)) {
                    setData(res.data.reverse());  // Only reverse if it's an array
                } else {
                    console.error('res.data is not an array');
                    setData([]);  // Optionally set an empty array or handle error
                }

            })
    }, [])






    return (
        <div className='md:mx-20 mx-4 h-full'>
            <div className='flex px-1 py-10 justify-between'>
                <p className='text-2xl dark:text-white font-medium'>Top Videos</p>





            </div>

            {data.length > 0 ?

                <div className='flex gap-x-8'>
                    <div className='border mb-4 dark:border-none bg-white dark:text-white dark:bg-gray-800 rounded-xl md:w-3/4 w-full h-full'>

                        <div className='grid   gap-y-2.5 grid-flow-row py-5 px-6'>





                            {data?.map((item, index) => (
                                item ? (


                                    <div className='md:flex gap-4 border-b pb-2.5 items-center  '>


                                        <div className="  " style={{}}>
                                            <iframe
                                                class="relative left-0 top-0 border dark:border-none inline-block w-full h-full md:h-24 md:w-36 rounded-md object-cover object-center"
                                                src="https://www.youtube.com/embed/_sztki-L7bg"
                                                title="YouTube video player"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerpolicy="strict-origin-when-cross-origin"
                                                allowfullscreen>
                                            </iframe>
                                        </div>

                                        <div className='grid tracking-normal antialiased relative'>
                                            <div className='flex items-center justify-between'>
                                                <Link

                                                    to={`${item.link}`}
                                                    target='_blank'
                                                    className='font-bold  pr-6 line-clamp-2 '
                                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                                  ></Link>




                                                <button key={item.videoID} type='button' data-modal-target="default-modal" data-modal-toggle="default-modal"
                                                    onClick={() => handleShareClick(item.videoID)}
                                                    className='relative hidden hover:bg-gray-100 p-2.5 h-10 w-10 rounded-full'
                                                >
                                                    <FaShare style={{ color: 'gray' }} />
                                                </button>
                                            </div>

                                            <span className='text-base text-gray-600'>{formatCreatedAt(item.createdAt)}</span>
                                            <span className='text-base hidden pr-12 truncate'>
                                                Australia’s dangerous batter Travis Head has signed up with
                                                Adelaide
                                            </span>

                                            {/* Share popup */}
                                            {isOpen[item.videoID] && (
                                                <div ref={popupRef}
                                                    style={{ top: "2.5rem", minWidth: '12rem' }}
                                                    className='absolute right-0 top-10 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-3 z-10'

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
                                                                className='w-5 h-5 mr-2' />
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
                                                                className='w-5 h-5 mr-2' />
                                                            Twitter
                                                        </a>
                                                        <button
                                                            onClick={copyLink}
                                                            className='flex items-center text-gray-700 hover:text-blue-600'
                                                        >
                                                            <img
                                                                src='https://cdn-icons-png.flaticon.com/24/54/54702.png'
                                                                alt='Copy Link'
                                                                className='w-5 h-5 mr-2' />
                                                            Copy Link
                                                        </button>
                                                    </div>
                                                </div>
                                            )}



                                        </div>

                                    </div>


                                ) : ""
                            ))}














                        </div>
                    </div>

                    <FbConnect />
                </div>

                : <p>No Video Available</p>}
        </div>
    );
};

export default CricketVideos;















