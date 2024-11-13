import React, { useEffect, useRef, useState } from 'react'
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const News = () => {


  const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);  // Reference for the popup element

    // Function to handle share button click
    const handleShareClick = (event) => {
        // const button = event.target.closest('button');
        // const buttonRect = button.getBoundingClientRect();

        // Set the popup position relative to the button
        // setPopupPosition({
        //     top: buttonRect.bottom + window.scrollY + 10,  // 10px below the button
        //     left: buttonRect.left + window.scrollX,  // Align left with the button
        // });

        setIsOpen(!isOpen);  // Toggle popup visibility
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
  return (
    <div>
      
      
      <div className='grid gap-y-2.5 grid-flow-row py-5 px-6'>


<div className='md:flex gap-4 border-b pb-2.5 items-center'>
    <img
        src='/viratnews.webp'
        alt='Virat Kohli News'
        className='relative border inline-block md:h-24 md:w-36 rounded-md object-cover object-center'
    />

    <div className='grid tracking-normal antialiased relative'>
        <div className='flex items-center justify-between'>
            <Link
                to='#'
                className='text-xl pr-6 line-clamp-2 font-semibold'
            >
                “Sometimes you make the right call, sometimes you don’t”:
                Rohit Sharma on batting first against NZ
            </Link>

            <button type='button' data-modal-target="default-modal" data-modal-toggle="default-modal"
                onClick={handleShareClick}
                className='relative hover:bg-gray-100 p-2.5 h-10 w-10 rounded-full'
            >
                <FaShare style={{ color: 'gray' }} />
            </button>
        </div>

        <span className='text-base text-gray-600'>1 day ago</span>
        <span className='text-base pr-12 truncate'>
            Australia’s dangerous batter Travis Head has signed up with
            Adelaide
        </span>

        {/* Share popup */}
        {isOpen && (
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







</div>
    </div>
  )
}

export default News