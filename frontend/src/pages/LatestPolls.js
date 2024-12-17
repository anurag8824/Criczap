import React from 'react'
import FbConnect from '../components/FbConnect'
import { useState, useEffect } from "react"
import axios from "axios"
import Cookies from "js-cookie";


const LatestPolls = () => {

    const [data, setData] = useState([])
    const [selectedOptions, setSelectedOptions] = useState({});


    const backUrl = process.env.REACT_APP_BACK_URL

    useEffect(() => {
        axios.get(`${backUrl}/admin/getpolls`)
            .then((res) => {
                console.log(res, "list of polls")
                // const result = [...res.data]
                if (Array.isArray(res.data)) {
                    setData(res.data.reverse());  // Only reverse if it's an array
                } else {
                    console.error('res.data is not an array');
                    setData([]);  // Optionally set an empty array or handle error
                }
                const savedSelections = Cookies.get("pollSelections");
                if (savedSelections) {
                    setSelectedOptions(JSON.parse(savedSelections));
                }
            })
    }, [])

    const handleSelection = (PollId, option) => {
        // Update the selected option in state
        setSelectedOptions((prev) => {
            const updatedSelections = { ...prev, [PollId]: option };
            Cookies.set("pollSelections", JSON.stringify(updatedSelections)); // Save to cookies
            return updatedSelections;
        });
    };

    const handleSubmit = (PollId) => {
        
            alert(`Poll submitted with option: ${selectedOptions[PollId]}`);

    
    };

    return (


        <div className='md:mx-20 mx-4 min-h-screen'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl dark:text-white  font-medium'>Latest Polls</p>
            
            </div>

            <div className='flex gap-x-8'>

                <div className='border mb-4 bg-white dark:bg-gray-800 dark:border-none rounded-xl md:w-3/4 w-full h-full'>
                    {data.length > 0 ?
                        <div class="flex flex-col md:flex-row p-6 space-y-4 md:space-y-0 md:space-x-4 w-full md:overflow-x-scroll custom-scrollbar">


                            {data?.map((item, index) => (
                                item ? (
                                    <div key={item._id} class="h-96 flex-shrink-0 w-full md:max-w-xs rounded-lg border  dark:bg-gray-800 bg-white">
                                        <div class="w-full rounded-lg rounded-b-none bg-blue-950 dark:bg-gray-700 text-center">
                                            <p class="truncate p-3 text-sm tracking-tight text-white">
                                                {item.question}
                                            </p>
                                            <p class="text-sm pb-2 tracking-tight text-white">
                                                {/* <span>28th Match </span>|<span> 19 Oct 2024 </span>|<span> 09:30 PM</span> */}
                                            </p>
                                        </div>

                                        <div class="mt-4 items-center  dark:text-white text-center">
                                            Who will win ?

                                            
                                            <div class="my-4 flex items-center pl-8">
                                                <input
                                                    id={`${item._id}_option1`}
                                                    type="radio"
                                                    value=""
                                                    name={`poll-${item._id}`}
                                                    checked={selectedOptions[item._id] === item.option1}
                                                    onChange={() => handleSelection(item._id, item.option1)}
                                                    class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 "
                                                />
                                                <label htmlFor={`${item._id}_option1`} class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    {item.option1}
                                                </label>
                                            </div>
                                            <div class="flex items-center pl-8">
                                                <input
                                                    id={`${item._id}_option2`}
                                                    type="radio"
                                                    value=""
                                                    name={`poll-${item._id}`}
                                                    checked={selectedOptions[item._id] === item.option2}
                                                    onChange={() => handleSelection(item._id, item.option2)}
                                                    class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600  "
                                                />
                                                <label htmlFor={`${item._id}_option2`} class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    {item.option2}
                                                </label>
                                            </div>

                                            <button onClick={() => handleSubmit(item._id)} class="my-5 rounded-lg bg-violet-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800">
                                                {selectedOptions[item._id] ? "Submit" : "Select "}
                                            </button>
                                            
                                        </div>
                                    </div>

                                ) : ""
                            ))}



                        </div>

                        : <p className='text-center text-sm text-red-500 font-medium flex flex-col items-center gap-4 '><img className='size-32' src='/cricket-stump.png'/>No Polls Available !</p>}







                </div>


                <FbConnect />


            </div>


        </div>






    )
}

export default LatestPolls
