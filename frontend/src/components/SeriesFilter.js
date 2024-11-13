import React, { useState } from 'react'
import { IoCheckmark } from "react-icons/io5";


const SeriesFilter = ({ sendDataToParent }) => {

    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);




    const apply = () => {
        // e.preventDefault();
        setChecked(!checked);

        setChecked1(setChecked1(false));
        setChecked2(setChecked2(false));
        const data = null
        sendDataToParent(data);


    }

    const apply1 = () => {
        // e.preventDefault();
        setChecked1(!checked1);
        setChecked(setChecked(false));
        setChecked2(setChecked2(false));
        const data = "T20"
        sendDataToParent(data);


    }

    const apply2 = () => {
        // e.preventDefault();
        setChecked2(!checked2);
        setChecked1(setChecked1(false));
        setChecked(setChecked(false));
        const data = "DM"
        sendDataToParent(data);


    }

    const reset = () =>{
        setChecked(setChecked(false));
        setChecked1(setChecked1(false));
        setChecked2(setChecked2(false));

    }
    // const handleClick = () => {
    //     const data = "Hello from the child!";
        
    //     // Call the function passed from the parent with the data
    //     sendDataToParent(data);
    // };



    return (
        <div className='flex mt-6 ml-6 text-sm font-medium gap-x-4'>

            <button onClick={reset} className='hover:bg-slate-100 text-blue-800 p-2  rounded-md'>
                Reset
            </button>

            <div className='w-px bg-gray-400'></div>
            <div className='flex gap-x-3 items-center text-base font-normal md:overflow-hidden scrollbar-hide overflow-x-scroll'>

                <button
                    type='button' onClick={() => { apply() }}
                    className={`${checked ? "border flex items-center justify-center  gap-2 rounded-full px-2.5 py-1  w-40 flex-shrink-0 text-center bg-violet-800 text-white" : "border justify-center flex gap-2 rounded-full px-2.5 py-1 bg-gray-200 w-40 flex-shrink-0 text-center"}`}
                >
                    {checked ? <IoCheckmark /> : null}
                    <span>International</span>
                </button>


                <button
                    type='button' onClick={() => { apply1() }}
                    className={`${checked1 ? "border flex items-center justify-center  gap-2 rounded-full px-2.5 py-1  w-40 flex-shrink-0 text-center bg-violet-800 text-white" : "border justify-center flex gap-2 rounded-full px-2.5 py-1 bg-gray-200 w-40 flex-shrink-0 text-center"}`}
                >
                    {checked1 ? <IoCheckmark /> : null}
                    <span>T20 Leagues</span>
                </button>


                <button
                    type='button' onClick={() => { apply2() }}
                    className={`${checked2 ? "border flex items-center justify-center  gap-2 rounded-full px-2.5 py-1  w-40 flex-shrink-0 text-center bg-violet-800 text-white" : "border justify-center flex gap-2 rounded-full px-2.5 py-1 bg-gray-200 w-40 flex-shrink-0 text-center"}`}
                >
                    {checked2 ? <IoCheckmark /> : null}
                    <span>Domestic</span>
                </button>
            </div>

        </div>
    )
}

export default SeriesFilter


// import React, { useState } from 'react';
// import { IoCheckmark } from 'react-icons/io5';

// const SeriesFilter = () => {
//   const [selected, setSelected] = useState(null);

//   const handleClick = (filter) => {
//     setSelected(filter === selected ? null : filter); // Toggle selection or deselect
//   };

//   return (
//     <div className='flex mt-6 ml-6 text-sm font-medium gap-x-4'>
//       <button
//         className='hover:bg-slate-100 text-blue-800 p-2 rounded-md'
//         onClick={() => setSelected(null)} // Reset selection
//       >
//         Reset
//       </button>

//       <div className='w-px bg-gray-400'></div>

//       <div className='flex gap-x-3 items-center text-base font-normal md:overflow-hidden scrollbar-hide overflow-x-scroll'>
//         {['International', 'T20 Leagues', 'Domestic'].map((filter, index) => (
//           <button
//             key={index}
//             type='button'
//             onClick={() => handleClick(filter)}
//             className={`border flex items-center justify-center gap-2 rounded-full px-2.5 py-1 w-40 flex-shrink-0 text-center ${
//               selected === filter ? 'bg-violet-800 text-white' : 'bg-gray-200'
//             }`}
//           >
//             {selected === filter && <IoCheckmark />}
//             <span>{filter}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SeriesFilter;
