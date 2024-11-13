import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Import arrow icons
import { Link } from 'react-router-dom';

const ToggleDropdowns = () => {
    const [dropdownState, setDropdownState] = useState({
        dropdown1: false,
        dropdown2: false,
        dropdown3: false,
        dropdown4: false,
        dropdown5: false,
    });

    const toggleDropdown = (dropdown) => {
        setDropdownState((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));
    };

    return (
        <div className="space-y-4 ">
            {/* Dropdown 1 */}
            <div>
                <button
                    onClick={() => toggleDropdown('dropdown1')}
                    className="w-full flex justify-between uppercase text-left py-3 rounded-lg rounded-b px-6 text-lg font-medium bg-violet-950 bg-opacity-85 text-white items-center  "
                >
                    <p>Bangladesh
                    </p>
                    <div className='flex items-center gap-4'>
                        <p>106-10 (40.1)</p>
                        {dropdownState.dropdown1 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                    </div>


                </button>
                {dropdownState.dropdown1 && (
                    <div className="">
                        {/* Content for scorecard 1  */}
                        <div className="p-4 border rounded-t-none border-t-0 rounded-lg space-y-2">

                            <div class="relative  overflow-x-auto ">
                                <table class=" w-full text-left rtl:text-right text-gray-950 ">
                                    <thead class="bg-gray-100   ">
                                        <tr>
                                            <th scope="col" class="pl-4 py-3 text-base font-medium md:w-1/2">
                                                Batters
                                            </th>


                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                R
                                            </th>

                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                B
                                            </th>

                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                4s
                                            </th>

                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                6s
                                            </th>


                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                SR
                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                            <td scope='row' className='text-left  px-2 py-2.5 '>
                                                <li className='list-none md:flex grid-flow-row md:gap-4'>
                                                    <Link className='hover:underline text-blue-500 '> Shadman Islam</Link>
                                                    <p className='text-red-500 '> c Aiden Markram b Wiaan Mulder</p>

                                                </li>

                                            </td>

                                            <td scope='row' class="">
                                                22
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>



                                        </tr>

                                        {/* 2nd row  */}



                                        <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                            <td scope='row' className='text-left  px-2 py-2.5 '>
                                                <li className='list-none md:flex grid-flow-row md:gap-4'>
                                                    <Link className='hover:underline text-blue-500 '> Shadman Islam</Link>
                                                    <p className='text-red-500 '> c Aiden Markram b Wiaan Mulder</p>

                                                </li>

                                            </td>

                                            <td scope='row' class="">
                                                22
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>



                                        </tr>










                                    </tbody>
                                </table>
                            </div>

                            <p className='text-base  border-b pb-2'>Extras 9 (1 b, 4 lb, 0 wd, 4 nb, 0 p)</p>
                            <p className='border-b pb-2'>Total 106-10  (40.1), Run rate : 2.64</p>
                            <p className='text-base font-medium'>Yet to bat</p>
                            <div className='text-base gap-1 text-blue-500  list-none flex '>
                                <Link className='hover:underline'>Taijul Islam,</Link>
                                <Link className='hover:underline'>Taijul Islam 2</Link>


                            </div>




                            <div class="relative  overflow-x-auto ">
                                <table class=" w-full text-left rtl:text-right text-gray-950 ">
                                    <thead class="bg-gray-100   ">
                                        <tr>
                                            <th scope="col" class="pl-4 py-3 text-base font-medium md:w-1/2">
                                                Bowlers
                                            </th>


                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                O
                                            </th>

                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                M
                                            </th>

                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                R
                                            </th>

                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                W
                                            </th>


                                            <th scope="col" class="md:px-6 px-2 text-center font-normal  ">
                                                ER
                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                            <td scope='row' className='text-left  px-2 py-2.5 '>
                                                <li className='list-none '>
                                                    <Link className='hover:underline text-blue-500 '> Kagiso Rabada</Link>

                                                </li>

                                            </td>

                                            <td scope='row' class="">
                                                22
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>



                                        </tr>

                                        {/* 2nd row  */}

                                        <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                            <td scope='row' className='text-left  px-2 py-2.5 '>
                                                <li className='list-none '>
                                                    <Link className='hover:underline text-blue-500 '> Kagiso Rabada</Link>

                                                </li>

                                            </td>

                                            <td scope='row' class="">
                                                22
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>

                                            <td className=''>
                                                44
                                            </td>



                                        </tr>













                                    </tbody>
                                </table>
                            </div>


                            <div class="relative  overflow-x-auto ">
                                <table class=" w-full text-left rtl:text-right text-gray-950 ">
                                    <thead class="bg-gray-100   ">
                                        <tr>
                                            <th scope="col" class="pl-4 py-3  text-base font-medium md:w-1/2">
                                                Fall of Wickets
                                            </th>


                                            <th scope="col" class="md:px-6 text-center   font-normal  ">
                                                Scope
                                            </th>

                                            <th scope="col" class="md:px-6  text-center  font-normal  ">
                                                Over
                                            </th>









                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                            <td scope='row' className='text-left  px-2 py-2.5 '>
                                                <li className='list-none '>
                                                    <Link className='hover:underline text-blue-500 '> Kagiso Rabada</Link>

                                                </li>

                                            </td>

                                            <td scope='row' class=" ">
                                                22
                                            </td>

                                            <td scope='row' class=" ">
                                                22
                                            </td>












                                        </tr>

                                        {/* 2nd row  */}

                                        <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                            <td scope='row' className='text-left  px-2 py-2.5 '>
                                                <li className='list-none '>
                                                    <Link className='hover:underline text-blue-500 '> Kagiso Rabada</Link>

                                                </li>

                                            </td>

                                            <td scope='row' class="">
                                                22
                                            </td>

                                            <td className=''>
                                                44
                                            </td>







                                        </tr>













                                    </tbody>
                                </table>
                            </div>











                        </div>
                    </div>
                )}
            </div>

            {/* Dropdown 2 */}
            <div>
                <button
                    onClick={() => toggleDropdown('dropdown2')}
                    className="w-full flex justify-between uppercase text-left py-3 rounded-lg rounded-b px-6 text-lg font-medium bg-violet-950 bg-opacity-85 text-white  "
                >
                    <p>Bangladesh
                    </p>
                    <div className='flex items-center gap-4'>
                        <p>106-10 (40.1)</p>
                        {dropdownState.dropdown2 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                    </div>
                </button>
                {dropdownState.dropdown2 && (
                    <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                        Content for Dropdown 2
                    </div>
                )}
            </div>

            {/* Dropdown 3 */}
            <div>
                <button
                    onClick={() => toggleDropdown('dropdown3')}
                    className="w-full flex justify-between uppercase text-left py-3 rounded-lg rounded-b px-6 text-lg font-medium bg-violet-950 bg-opacity-85 text-white  "
                >
                    <p>Bangladesh
                    </p>
                    <div className='flex items-center gap-4'>
                        <p>106-10 (40.1)</p>
                        {dropdownState.dropdown3 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                    </div>
                </button>
                {dropdownState.dropdown3 && (
                    <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                        Content for Dropdown 3
                    </div>
                )}
            </div>

            {/* Dropdown 4 */}
            <div>
                <button
                    onClick={() => toggleDropdown('dropdown4')}
                    className="w-full flex justify-between uppercase text-left py-3 rounded-lg rounded-b px-6 text-lg font-medium bg-violet-950 bg-opacity-85 text-white  "
                >
                    <p>Bangladesh
                    </p>
                    <div className='flex items-center gap-4'>
                        <p>106-10 (40.1)</p>
                        {dropdownState.dropdown4 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                    </div>
                </button>
                {dropdownState.dropdown4 && (
                    <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                        Content for Dropdown 4
                    </div>
                )}
            </div>

            {/* Dropdown 5 */}
            <div>
                <button
                    onClick={() => toggleDropdown('dropdown5')}
                    className="w-full flex justify-between uppercase text-left py-3 rounded-lg rounded-b px-6 text-lg font-medium bg-violet-950 bg-opacity-85 text-white  "
                >
                    <p>Bangladesh
                    </p>
                    <div className='flex items-center gap-4'>
                        <p>106-10 (40.1)</p>
                        {dropdownState.dropdown5 ? <IoIosArrowUp /> : <IoIosArrowDown />}

                    </div>
                </button>
                {dropdownState.dropdown5 && (
                    <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                        Content for Dropdown 5
                    </div>
                )}
            </div>
        </div>
    );
};

export default ToggleDropdowns;
