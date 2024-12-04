import React, { useEffect, useState } from 'react'
import { formatDistanceToNow, isAfter, addDays, format } from 'date-fns';
import FbConnect from '../components/FbConnect';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import BoxLoader from './BoxLoader';


const CNView = () => {
    const backUrl = process.env.REACT_APP_BACK_URL;
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);



    const [data, setData] = useState([]);
    const [selectedNews, setSelectedNews] = useState();


    const handleShareClick = (dropdown) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [dropdown]: !prevState[dropdown],
        }));
    };


    const formatCreatedAt = (createdAt) => {
        const createdDate = new Date(createdAt);
        const sevenDaysFromNow = addDays(createdDate, 7);
        const now = new Date();

        if (isAfter(sevenDaysFromNow, now)) {
            return `${formatDistanceToNow(createdDate, { addSuffix: true })}`;
        }

        return format(createdDate, 'EEEE dd-MMM-yyyy');
    };

    const newsid = useParams().id
    console.log(newsid)

    useEffect(() => {

        axios.post(`${backUrl}/admin/newsinfo`, { newsid })
            .then((res) => {
                setLoading(true)
                const ndata = res.data
                console.log(ndata, "nadat")
                setSelectedNews(ndata)

            })

    }, [])





    return (
        <div className='md:mx-20 mx-4 '>

            <p className='text-2xl px-1 py-10 font-medium'>Top Stories</p>




            {loading ? 
         


            <div className='flex gap-x-8'>
                {selectedNews ?

                    <div className='border mb-4 bg-white rounded-xl md:w-3/4 min-w-1/3  p-4 '>


                        <div className='grid gap-y-2.5 grid-flow-row py-5 px-6'>

                            <div className=' gap-4 border-b pb-2.5 items-center'>
                                <div className=' items-center justify-between'>
                                    <div
                                        className=' pr-6 text-lg line-clamp-2 font-medium'
                                        dangerouslySetInnerHTML={{ __html: selectedNews?.headline }}


                                    ></div>


                                </div>

                                <span className="text-base  text-gray-600">
                                    {formatCreatedAt(selectedNews?.createdAt)}
                                </span>
                                <img
                                    src={`${backUrl}/${selectedNews?.selectedFile}`}
                                    alt='Virat Kohli News'
                                    className='relative border mt-2 inline-block md:w-full rounded-md object-cover object-center' />

                                <div className='grid tracking-normal antialiased relative flex-1'>


                                    <div
                                        className="text-base  max-w-full"
                                        dangerouslySetInnerHTML={{ __html: selectedNews?.text }}
                                    ></div>

                                    {selectedNews.description ?

                                        <div className="text-base  max-w-full">
                                            <p className='text-lg font-medium my-4'>Tags</p>
                                            <div className=" flex gap-2">
                                                {selectedNews?.description
                                                    .split(",") // Split the description by commas
                                                    .map((item, index) => (
                                                        item ? (

                                                            <Link to="#" key={index} className="bg-gray-300 hover:bg-gray-100 hover:underline px-4 py-2 rounded-md">
                                                                {item.trim()} {/* Trim any extra spaces */}
                                                            </Link>

                                                        ) : ""

                                                    ))}
                                            </div>
                                        </div>

                                        : ""}









                                </div>

                            </div>















                        </div>


                    </div>

                    : <p>No info Available</p>}


                <FbConnect />
            </div>



             : <BoxLoader /> } 

        </div>
    )
}

export default CNView







