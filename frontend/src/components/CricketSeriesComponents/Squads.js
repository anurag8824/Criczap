import React, { useState } from "react";
import SeriesPlayerList from "./SeriesPlayerList";

const Squads = ({ data }) => {
  const [activeTeam, setActiveTeam] = useState("india");

  const [modal, setModal] = useState(true);



  const handleTeamClick = (team) => {
    setActiveTeam(team === activeTeam ? null : team); // Toggle active team
  };

  const openClick = () => {
    setModal(!modal);
  }

  return (

    // <div className="md:flex  justify-between  gap-4 max-w-4xl mx-auto p-3">
    //   {/* Accordion Section */}
    //   <div className="w-1/2  rounded-lg">
    //     <div className="mb-4">
    //       <button
    //         className="w-full text-left py-1 rounded-lg rounded-b px-4 text-lg font-medium bg-blue-900 text-white"
    //         onClick={() => openClick()}
    //       >
    //         T20
    //       </button>



    //       {modal ?

    //         <div className="p-4 border rounded-t-none border-t-0 rounded-lg space-y-2">
    //           <button
    //             className="w-full py-2 px-2.5 text-left bg-gray-200 rounded-md hover:shadow-lg hover:-translate-y-1 focus:outline-none"
    //             onClick={() => setActiveTeam("india")}
    //           >
    //             India Team
    //           </button>


    //           <button
    //             className="w-full py-2 px-2.5 text-left bg-gray-200 rounded-md hover:shadow-lg hover:-translate-y-1 focus:outline-none"
    //             onClick={() => setActiveTeam("newzealand")}
    //           >
    //             New Zealand Team
    //           </button>

    //         </div>

    //         : null}

    //     </div>


    //   </div>

    //   {/* Display Players */}
    //   <div className="w-full p-4 rounded-lg">

    //     {activeTeam === "india" && (
    //       <div>
    //         {/* <h2 className="text-xl font-semibold mb-2">India Players:</h2>
    //         <ul className="list-disc list-inside">
    //           {indiaPlayers.map((player) => (
    //             <li key={player}>{player}</li>
    //           ))}
    //         </ul> */}

    //         <SeriesPlayerList />
    //       </div>


    //     )}



    //     {activeTeam === "newzealand" && (
    //       <div>
    //         {/* <h2 className="text-xl font-semibold mb-2">New Zealand Players:</h2>
    //         <ul className="list-disc list-inside">
    //           {newZealandPlayers.map((player) => (
    //             <li key={player}>{player}</li>
    //           ))}
    //         </ul> */}

    //         <SeriesPlayerList />

    //       </div>
    //     )}

    //   </div>

    // </div>
    <div>

      {data?.response?.standing?.standings.length > 0 ?
        <>

          {data?.response?.standing?.standings.map((item, index) => (

            item ? (
              <><p className="text-lg font-medium py-2.5 text-blue-950">{item?.round?.name}</p><div class="relative overflow-x-auto">


                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-50 uppercase bg-blue-950 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">Teams</th>
                      <th scope="col" class="px-6 py-3">M</th>
                      <th scope="col" class="px-6 py-3">W</th>
                      <th scope="col" class="px-6 py-3">L</th>
                      <th scope="col" class="px-6 py-3">T</th>
                      <th scope="col" class="px-6 py-3">NR</th>
                      <th scope="col" class="px-6 py-3">NRR</th>

                      <th scope="col" class="px-6 py-3">PTS</th>

                    </tr>
                  </thead>

                  <tbody>


                    {item.standings.map((item, index) => (
                      item ? (
                        <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th scope="row" class="px-6 flex items-center gap-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img src={item?.team?.logo_url} className="h-8 w-8 border-white rounded-full" /> {item.team.title}

                          </th>
                          <td class="px-6 py-4">{item.played}</td>
                          <td class="px-6 py-4">{item.win}</td>
                          <td class="px-6 py-4">{item.loss}</td>
                          <td class="px-6 py-4">{item.draw}</td>
                          <td class="px-6 py-4">{item.nr}</td>
                          <td class="px-6 py-4">{item.netrr}</td>
                          <td class="px-6 text-blue-950 text-lg font-medium py-4">{item.points}</td>



                        </tr>
                      ) : <p>Not available</p>
                    ))}




                  </tbody>
                </table>
              </div></>

            ) : <p>Not available</p>

          ))}

        </>

        : <p className="text-red-500 text-center font-medium">Not available</p>}







    </div>



  );
};

export default Squads;



