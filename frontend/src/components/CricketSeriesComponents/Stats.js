import React, { useState } from "react";
import SeriesPlayerList from "./SeriesPlayerList";
import StatsTable from "./StatsTable";

const Stats = () => {
  const [activeTeam, setActiveTeam] = useState("india");

  const [modal, setModal] = useState(true);

  // Example player data for India and New Zealand teams
  const indiaPlayers = ["Virat Kohli", "Rohit Sharma", "Jasprit Bumrah"];
  const newZealandPlayers = ["Kane Williamson", "Trent Boult", "Ross Taylor"];

  const handleTeamClick = (team) => {
    setActiveTeam(team === activeTeam ? null : team); // Toggle active team
  };

  const openClick = () => {
    setModal(!modal);
  }

  return (
    <div className="md:flex justify-between  gap-4 max-w-4xl mx-auto p-3">
      {/* Accordion Section */}
      <div className="w-1/2  rounded-lg">
        <div className="mb-4">
          <button
            className="w-full text-left py-1 rounded-lg rounded-b px-4 text-lg font-medium bg-blue-900 text-white"
            onClick={() => openClick()}
          >
            BATTING
          </button>

          {/* <button
            className="w-full text-left py-1 rounded-lg rounded-b px-4 text-lg font-medium bg-blue-900 text-white"
            onClick={() => openClick()}
          >
            BOWLING
          </button> */}




          {modal ?

            <div className="p-4 border rounded-t-none border-t-0 rounded-lg space-y-2">
              <button
                className="w-full py-2 px-2.5 text-left bg-gray-200 rounded-md hover:shadow-lg hover:-translate-y-1 focus:outline-none"
                onClick={() => setActiveTeam("india")}
              >
                Most Runs
              </button>


              <button
                className="w-full py-2 px-2.5 text-left bg-gray-200 rounded-md hover:shadow-lg hover:-translate-y-1 focus:outline-none"
                onClick={() => setActiveTeam("newzealand")}
              >
                Highest Score
              </button>

            </div>

            : null}

        </div>


      </div>

      {/* Display Players */}
      <div className="w-full p-4 rounded-lg">

        {activeTeam === "india" && (
          <div>
            {/* <h2 className="text-xl font-semibold mb-2">India Players:</h2>
            <ul className="list-disc list-inside">
              {indiaPlayers.map((player) => (
                <li key={player}>{player}</li>
              ))}
            </ul> */}

            <StatsTable />
          </div>


        )}



        {activeTeam === "newzealand" && (
          <div>
            {/* <h2 className="text-xl font-semibold mb-2">New Zealand Players:</h2>
            <ul className="list-disc list-inside">
              {newZealandPlayers.map((player) => (
                <li key={player}>{player}</li>
              ))}
            </ul> */}

            <StatsTable />


          </div>
        )}

      </div>

    </div>
  );
};

export default Stats;



