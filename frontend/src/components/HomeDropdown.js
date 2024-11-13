import React, { useEffect, useState } from 'react'
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios'

const HomeDropdown = () => {
    const [show, setShow] = useState(false);
  
    const showAll = () => {
  
      setShow(!show);
  
    }
    

    return (
        <div>
            <div className='hidden text-sm  md:flex justify-between items-center py-1 px-4 bg-white w-full'>
                <p className='uppercase font-medium '>Matches</p>

                <div className='flex gap-12 text-gray-700'>
                    {/* map starts sfrom heree  */}
                    <p>CCC vs WIAC ● Upcoming</p>
                    <p>PerthW vs HeatW ● Upcoming</p>
                    <p>CCC vs WIAC ● Upcoming</p>
                    <p>PerthW vs HeatW ● Upcoming</p>
                    <p>PerthW vs HeatW ● Upcoming</p>


                </div>


                <button onClick={showAll} className='font-medium flex  '  > All {show ? <FaSortDown /> : <FaSortDown />} </button>



            </div>

            {show && (



                <div className="hidden text-sm border-t text-gray-700 md:grid gap-5 py-4 grid-cols-3 justify-between items-center px-4 bg-white w-full">


                    {/* map starts from here  */}
                    <div>
                        <p>Cricket World Cup League Two 2023-27</p>
                        <p className='font-semibold'>Combined Campuses And Colleges vs West Indies Academy, 11th ODI Match <span className='text-green-600'>Finished</span></p>
                    </div>


                    <div>
                        <p>Cricket World Cup League Two 2023-27</p>
                        <p className='font-semibold'>Combined Campuses And Colleges vs West Indies Academy, 11th ODI Match</p>
                    </div>

                    <div>
                        <p>Cricket World Cup League Two 2023-27</p>
                        <p className='font-semibold'>Combined Campuses And Colleges vs West Indies Academy, 11th ODI Match</p>
                    </div>

                    <div>
                        <p>Cricket World Cup League Two 2023-27</p>
                        <p className='font-semibold'>Combined Campuses And Colleges vs West Indies Academy, 11th ODI Match</p>
                    </div>

                    <div>
                        <p>Cricket World Cup League Two 2023-27</p>
                        <p className='font-semibold'>Combined Campuses And Colleges vs West Indies Academy, 11th ODI Match <span className='text-green-600'>Finished</span></p>
                    </div>








                </div>


            )}



        </div>
    )
}
export default HomeDropdown
