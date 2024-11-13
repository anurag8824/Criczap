import React, { useState } from 'react'

const WBatters = ({mdata}) => {

    const [showFullTable, setShowFullTable] = useState(false);
    const [showFullTable2, setShowFullTable2] = useState(false);
    const [showFullTable3, setShowFullTable3] = useState(false);


    // Function to handle button click
    const handleToggle = () => {
        setShowFullTable((prev) => !prev);
    };

    const handleToggle2 = () => {
        setShowFullTable2((prev) => !prev);
    };
    const handleToggle3 = () => {
        setShowFullTable3((prev) => !prev);
    };
  
  
  return (
    <div className='w-full '>

      <p className='border-b pb-2 font-medium text-xl'> Womens's batting Ranking
      </p>

      <div className='md:flex gap-2'>


        <div className='border rounded-md md:w-1/3 mt-4'>
          <p className='px-2 py-2 font-medium text-lg text-violet-900'>Odi Batting Ranking</p>

          {/* Table */}
          <div className="relative overflow-x-auto scrollbar-hide">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Player
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Points
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {(showFullTable2 ? mdata?.batsmen?.odis : mdata?.batsmen?.odis?.slice(0, 5))?.map((item, index) =>
                  item ? (
                    <tr
                      key={index}
                      className={`border-b ${item.rank === "1" ? "bg-violet-900 text-white" : "bg-white"} dark:bg-gray-800 dark:border-gray-700`}
                    >
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                        {item.rank}
                      </th>
                      <td className="px-6 py-4">
                        {item.player}
                      </td>
                      <td className="px-6 py-4">
                        {item.rating}
                      </td>
                    
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>

          {/* Button to toggle full view */}
          <div className="text-center my-4">
            <button
              onClick={handleToggle2}
              className="px-4 py-2 bg-violet-700 text-white rounded hover:bg-violet-800"
            >
              {showFullTable2 ? 'Show Less' : 'Show Full Table'}
            </button>
          </div>
        </div>




        <div className='border rounded-md md:w-1/3 mt-4'>
          <p className='px-2 py-2 font-medium text-lg text-violet-900'>T20 batsmen Ranking</p>

          {/* Table */}
          <div className="relative overflow-x-auto scrollbar-hide">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                    Rank
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Player
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Points
                  </th>
                 
                </tr>
              </thead>
              <tbody>
                {(showFullTable3 ? mdata?.batsmen?.t20s : mdata?.batsmen?.t20s?.slice(0, 5))?.map((item, index) =>
                  item ? (
                    <tr
                      key={index}
                      className={`border-b ${item.rank === "1" ? "bg-violet-900 text-white" : "bg-white"} dark:bg-gray-800 dark:border-gray-700`}
                    >
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                        {item.rank}
                      </th>
                      <td className="px-6 py-4">
                        {item.player}
                      </td>
                      <td className="px-6 py-4">
                        {item.rating}
                      </td>
                     
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>

          {/* Button to toggle full view */}
          <div className="text-center my-4">
            <button
              onClick={handleToggle3}
              className="px-4 py-2 bg-violet-700 text-white rounded hover:bg-violet-800"
            >
              {showFullTable3 ? 'Show Less' : 'Show Full Table'}
            </button>
          </div>
        </div>





      </div>





    </div>
  )
}

export default WBatters