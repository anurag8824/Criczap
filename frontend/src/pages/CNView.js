// import React from 'react'

// const CNView = () => {
//     return (
//         <div className='md:mx-20 mx-4 h-full'>
//             <div className='flex px-1 py-10 justify-between'>
//                 <p className='text-2xl font-medium'>Top Stories</p>




//                 <input
//                     className='bg-white rounded-full pr-6 pl-3 py-3 text-sm'
//                     placeholder='Search...'
//                 />
//             </div>

//             <div className='flex gap-x-8'>
//                 {data?.length > 0 ?

//                     <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>


//                         <div className='grid gap-y-2.5 grid-flow-row py-5 px-6'>

//                             {data?.map((item, index) => (
//                                 item ? (

//                                     <div className='md:flex gap-4 border-b pb-2.5 items-center'>
//                                         <img
//                                             src={`${backUrl}/${item.selectedFile}`}
//                                             alt='Virat Kohli News'
//                                             className='relative border inline-block md:h-24 md:w-36 rounded-md object-cover object-center'
//                                         />

//                                         <div className='grid tracking-normal antialiased relative flex-1'>
//                                             <div className='flex items-center justify-between'>
//                                                 <Link
//                                                     to={`/cricket-news/${item.newsID}/${item.permalink}`}
//                                                     className=' pr-6 text-lg line-clamp-2 font-medium'
//                                                     dangerouslySetInnerHTML={{ __html: item.headline }}


//                                                 />

//                                                 <button key={item.newsID} type='button' data-modal-target="default-modal" data-modal-toggle="default-modal"
//                                                     onClick={() => handleShareClick(item.newsID)}
//                                                     className='relative hover:bg-gray-100 p-2.5 h-10 w-10 rounded-full'
//                                                 >
//                                                     <FaShare style={{ color: 'gray' }} />
//                                                 </button>
//                                             </div>

//                                             <span className="text-base text-gray-600">
//                                                 {formatCreatedAt(item.createdAt)}
//                                             </span>

//                                             <div
//                                                 className="text-base pr-12 line-clamp-1 truncate max-w-full"
//                                                 style={{
//                                                     overflow: "hidden",
//                                                     whiteSpace: "nowrap",
//                                                     textOverflow: "ellipsis",
//                                                 }}
//                                                 dangerouslySetInnerHTML={{ __html: item.text }}
//                                             ></div>



//                                             {/* Share popup */}
//                                             {isOpen[item.newsID] && (
//                                                 <div ref={popupRef}
//                                                     style={{ top: "2.5rem", minWidth: '12rem' }}
//                                                     className='absolute right-0 top-10 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg p-3 z-10'

//                                                 >
//                                                     <div className='flex flex-col space-y-2'>
//                                                         <a
//                                                             href={`https://wa.me/?text=${window.location.href}`}
//                                                             target='_blank'
//                                                             rel='noopener noreferrer'
//                                                             className='flex items-center text-gray-700 hover:text-green-500'
//                                                         >
//                                                             <img
//                                                                 src='https://cdn-icons-png.flaticon.com/24/124/124034.png'
//                                                                 alt='WhatsApp'
//                                                                 className='w-5 h-5 mr-2'
//                                                             />
//                                                             WhatsApp
//                                                         </a>
//                                                         <a
//                                                             href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
//                                                             target='_blank'
//                                                             rel='noopener noreferrer'
//                                                             className='flex items-center text-gray-700 hover:text-blue-400'
//                                                         >
//                                                             <img
//                                                                 src='https://cdn-icons-png.flaticon.com/24/733/733579.png'
//                                                                 alt='Twitter'
//                                                                 className='w-5 h-5 mr-2'
//                                                             />
//                                                             Twitter
//                                                         </a>
//                                                         <button
//                                                             onClick={copyLink}
//                                                             className='flex items-center text-gray-700 hover:text-blue-600'
//                                                         >
//                                                             <img
//                                                                 src='https://cdn-icons-png.flaticon.com/24/54/54702.png'
//                                                                 alt='Copy Link'
//                                                                 className='w-5 h-5 mr-2'
//                                                             />
//                                                             Copy Link
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             )}



//                                         </div>

//                                     </div>


//                                 ) : ""
//                             ))}










//                         </div>


//                     </div>

//                     : <p>No info Available</p>}


//                 <FbConnect />
//             </div>
//         </div>
//     )
// }

// export default CNView