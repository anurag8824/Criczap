import React, { useEffect, useRef, useState } from 'react';
import FbConnect from "../components/FbConnect"

import { Link, useNavigate } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';
import axios from "axios"
import { formatDistanceToNow, isAfter, addDays, format } from 'date-fns';
import { IoArrowBackSharp } from "react-icons/io5";



const NewsBundle = () => {
    const backUrl = process.env.REACT_APP_BACK_URL;
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null); // Store the selected news
    const navigate = useNavigate();

    const popupRef = useRef(null);  // Reference for the popup element

    // Function to handle share button click
    // const handleShareClick = (event) => {


    //     setIsOpen(!isOpen);  // Toggle popup visibility
    // };

    const handleShareClick = (dropdown) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));
    };

    const formatUrl = (text) => {
        return text.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with dashes
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
        axios.get(`${backUrl}/admin/allnews`)
            .then((res) => {
                console.log(res, "list of news")
                // const result = [...res.data]
                if (Array.isArray(res.data)) {
                    setData(res.data.reverse());  // Only reverse if it's an array
                } else {
                    console.error('res.data is not an array');
                    setData([]);  // Optionally set an empty array or handle error
                }
            })
    }, [])

    // const crypto = require('crypto');

    const formatCreatedAt = (createdAt) => {
        const createdDate = new Date(createdAt);
        const sevenDaysFromNow = addDays(createdDate, 7);
        const now = new Date();

        if (isAfter(sevenDaysFromNow, now)) {
            return `${formatDistanceToNow(createdDate, { addSuffix: true })}`;
        }

        return format(createdDate, 'EEEE dd-MMM-yyyy');
    };



    return (
        <div className='md:mx-2 mx-2 '>


            {data?.length > 0 ?
                <div className='flex gap-x-8'>


                    <div className=' mb-4 rounded-xl  w-full '>




                        <div className='grid gap-y-2.5 grid-flow-row py-3 md:px-3'>

                            {data?.map((item, index) => (
                                item ? (

                                    <div className='md:flex gap-4 border-b pb-2.5 items-center'>
                                        <img
                                            src={`${backUrl}/${item.selectedFile}`}
                                            alt='Virat Kohli News'
                                            className='relative border dark:border-none inline-block md:h-24 md:w-36 rounded-md object-cover object-center'
                                        />

                                        <div className='grid tracking-normal antialiased relative flex-1'>
                                            <div className='flex items-center justify-between'>
                                                <Link to={`/cricket-news/${item.newsID}/${formatUrl(item.permalink)}`}
                                                    // onClick={() => handleNewsClick(item.newsID, item.permalink)}
                                                    className=' pr-6 text-lg text-left line-clamp-2 font-medium'
                                                    dangerouslySetInnerHTML={{ __html: item.headline }}


                                                ></Link>
                                                {/* <button
                                                                type="button"
                                                                className="relative hover:bg-gray-600 p-2.5 h-10 w-10 rounded-full"
                                                                onClick={() => handleNewsClick(item.newsID, item.permalink)}
                                                            ></button> */}

                                                <button key={item.newsID} type='button' data-modal-target="default-modal" data-modal-toggle="default-modal"
                                                    onClick={() => handleShareClick(item.newsID)}
                                                    className='relative hidden hover:bg-gray-100 p-2.5 h-10 w-10 rounded-full'
                                                >
                                                    <FaShare style={{ color: 'gray' }} />
                                                </button>
                                            </div>

                                            <span className="text-base text-gray-600">
                                                {formatCreatedAt(item.createdAt)}
                                            </span>

                                            <div
                                                className="text-base pr-12 line-clamp-1 truncate max-w-full"
                                                style={{
                                                    overflow: "hidden",
                                                    whiteSpace: "nowrap",
                                                    textOverflow: "ellipsis",
                                                }}
                                                dangerouslySetInnerHTML={{ __html: item.text }}
                                            ></div>



                                            {/* Share popup */}
                                            {isOpen[item.newsID] && (
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


                                ) : ""
                            ))}










                        </div>





                    </div>




                </div>
                : <p>No News Available</p>}
        </div>
    );
};

export default NewsBundle;















