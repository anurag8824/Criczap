import React, { useEffect, useState } from 'react'
import FbConnect from '../components/FbConnect'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CricketTeams = () => {

    const [data, setData] = useState([])

    const [search, setSearch] = useState("")
    const backUrl = process.env.REACT_APP_BACK_URL


    useEffect(() => {

        axios.get(`${backUrl}/api/v1/allteam`)
            .then((res) => {
                console.log(res, "team list");
                setData(res.data.msg.items)



            })
            .catch((err) => {
                console.log(err, "teamss");
            })

      





        // async function fetchAllMatches() {
        //     let allMatches = [];
        //     let page = 1;
        //     let hasMoreData = true;

        //     while (hasMoreData) {
        //       try {
        //          await axios.get(`http://localhost:8050/api/v1/allteam`, {
        //           params: {
        //             token: '91e89bd6c7b1f611304ba0f6faf45fd3',
        //             paged: page,
        //           },
        //         }).then((res) => {

        //         const matches = res.data.msg;

        //         if (matches.items && matches.total_items.length > 0) {
        //             allMatches = allMatches.concat(matches.items);
        //             page += 1;  // Go to the next page
        //           } else {
        //             hasMoreData = false; // No more matches to fetch
        //           }

        //         })


        //       } catch (error) {
        //         console.error('Error fetching matches:', error);
        //         hasMoreData = false;
        //       }
        //     }

        //     return allMatches;
        //   }

        //   fetchAllMatches().then((matches) => {
        //     console.log('Total matches fetched:', matches.length);
        //     console.log(matches);
        //   });


    }, [])
    const handleSearch = () => {

        axios.post(`${backUrl}/api/v1/searchteam`, {search})
            .then((res) => {
                console.log(res, "send serach");
                setData(res.data.msg.items)

            })

    }

    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>CricketTeams</p>
                <input

                    onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            handleSearch();
                        }
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm'
                    placeholder='Search...'
                />
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                    <div className='grid gap-y-2.5 grid-flow-row p-8'>

                        {data.map((item, index) => (
                            item ? (


                                <div key={index} class="flex gap-4 border-b pb-2.5 items-center">
                                    <img
                                        src={item.logo_url}
                                        alt="Tania Andrew"
                                        class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                                    />

                                    <Link to={`/cricket-team-detail/${item.tid}/home`} class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                        {item.title}
                                    </Link>
                                </div>


                            ) : null
                        ))}







                    </div>





                </div>

                <FbConnect />


            </div>


        </div>
    )
}

export default CricketTeams