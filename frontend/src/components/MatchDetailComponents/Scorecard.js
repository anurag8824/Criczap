import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Import arrow icons
import { Link } from 'react-router-dom';

const Scorecard = ({ data }) => {
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

      {data?.response.scorecard.innings ? <>


      {data?.response.scorecard.innings.map((item, index) => (

        item ? (



          <div key={index}>
            <button
              onClick={() => toggleDropdown('dropdown1')}
              className="w-full flex justify-between uppercase text-left py-3 rounded-lg rounded-b px-6 text-lg font-medium bg-violet-950 bg-opacity-85 text-white items-center  "
            >
              <p>{item.name}
              </p>
              <div className='flex items-center gap-4'>
                <p>{item.scores_full}</p>
                {dropdownState.dropdown1 ? <IoIosArrowUp /> : <IoIosArrowDown />}

              </div>


            </button>
            {dropdownState.dropdown1 && (



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


                      {item.batsmen.map((item, index) => (
                        item ? (

                          <tr key={index} className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                            <td scope='row' className='text-left  px-2 py-2.5 '>
                              <li className='list-none md:flex grid-flow-row md:gap-4'>
                                <Link className='hover:underline text-blue-500 '> {item.name}</Link>
                                <p className='text-red-500 '> {item.how_out}</p>

                              </li>

                            </td>

                            <td scope='row' class="">
                              {item.runs}
                            </td>

                            <td className=''>
                              {item.balls_faced}
                            </td>

                            <td className=''>
                              {item.fours}
                            </td>

                            <td className=''>
                              {item.sixes}
                            </td>

                            <td className=''>
                              {item.strike_rate
                              }
                            </td>



                          </tr>

                        ) : null

                      ))}



                    </tbody>
                  </table>
                </div>

                <p className='text-base  border-b pb-2'>Extras {item.extra_runs.total} ({item.extra_runs.byes} b, {item.extra_runs.legbyes} lb, {item.extra_runs.wides} wd, {item.extra_runs.noballs} nb, {item.extra_runs.penalty} p)</p>
                <p className='border-b pb-2'>Total {item.scores_full}</p>
                <p className='text-base font-medium'>Yet to bat</p>


                {item.did_not_bat.map((item, index) => (
                  item ? (
                    <Link key={index} className='hover:underline text-base gap-1 text-blue-500'>{item.name}, </Link>
                  ) : null
                ))

                }




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

                      {item.bowlers.map((item, index) => (
                        item ? (

                          <tr key={index} className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                            <td scope='row' className='text-left  px-2 py-2.5 '>
                              <li className='list-none '>
                                <Link className='hover:underline text-blue-500 '>{item.name}</Link>

                              </li>

                            </td>

                            <td scope='row' class="">
                              {item.overs}
                            </td>

                            <td className=''>
                              {item.maidens}
                            </td>

                            <td className=''>
                              {item.runs_conceded
                              }
                            </td>

                            <td className=''>
                              {item.wickets}
                            </td>

                            <td className=''>
                              {item.econ}
                            </td>



                          </tr>

                        ) : null

                      ))}





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

                      {item.fows.map((item, index) => (
                        item ? (


                          <tr key={index} className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                            <td scope='row' className='text-left  px-2 py-2.5 '>
                              <li className='list-none '>
                                <Link className='hover:underline text-blue-500 '> {item.name}</Link>

                              </li>

                            </td>

                            <td scope='row' class=" ">
                              {item.score_at_dismissal}/{item.number}
                            </td>

                            <td scope='row' class=" ">
                              {item.overs_at_dismissal}
                            </td>












                          </tr>

                        ) : null

                      ))}




                    </tbody>
                  </table>
                </div>











              </div>


            )}
          </div>





        ) : null


      ))}

      </>

: <p className=' font-medium text-md mt-2 text-center text-red-600 '>Match Not Started Yet</p>}




















      
    </div>
  );
};

export default Scorecard;
