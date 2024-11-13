// import React, { useState, useRef, useEffect } from 'react';

// const ShareButton = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [position, setPosition] = useState({ top: 0, left: 0 });
//   const buttonRef = useRef(null);

//   // Function to toggle the share popup
//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     if (isOpen && buttonRef.current) {
//       const rect = buttonRef.current.getBoundingClientRect();
//       setPosition({
//         top: rect.bottom + window.scrollY, // Adjust position below the button
//         left: rect.left + window.scrollX,  // Align the popup with the button horizontally
//       });
//     }
//   }, [isOpen]);

//   // Function to copy the link (you can adjust the link you want to copy)
//   const copyLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//     alert('Link copied to clipboard!');
//   };

//   return (
//     <div className="relative inline-block">
//       {/* Button that triggers the share popup */}
//       <button
//         ref={buttonRef}
//         onClick={togglePopup}
//         className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//       >
//         Share
//       </button>

//       {/* Share popup */}
//       {isOpen && (
//         <div
//           className={`absoulte w-40 bg-white border border-gray-200 shadow-lg rounded-lg p-3 transition-all duration-200 ease-in-out origin-bottom-right`}
//           style={{ top: `${position.top}px`, left: `${position.left}px` }} // Position the popup based on button
//         >
//           {/* Share options */}
//           <div className="flex flex-col space-y-2">
//             <a
//               href={`https://wa.me/?text=${window.location.href}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-gray-700 hover:text-green-500"
//             >
//               <img
//                 src="https://cdn-icons-png.flaticon.com/24/124/124034.png"
//                 alt="WhatsApp"
//                 className="w-5 h-5 mr-2"
//               />
//               WhatsApp
//             </a>
//             <a
//               href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-gray-700 hover:text-blue-400"
//             >
//               <img
//                 src="https://cdn-icons-png.flaticon.com/24/733/733579.png"
//                 alt="Twitter"
//                 className="w-5 h-5 mr-2"
//               />
//               Twitter
//             </a>
//             <button
//               onClick={copyLink}
//               className="flex items-center text-gray-700 hover:text-blue-600"
//             >
//               <img
//                 src="https://cdn-icons-png.flaticon.com/24/54/54702.png"
//                 alt="Copy Link"
//                 className="w-5 h-5 mr-2"
//               />
//               Copy Link
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShareButton;
