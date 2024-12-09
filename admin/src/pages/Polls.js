import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate} from "react-router-dom"

const Polls = () => {

    const [pollData, setPollData] = useState({
        question: "",
        option1: "",
        option2: "",
    });

    const navigate = useNavigate()

    const backUrl = process.env.REACT_APP_BACK_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPollData({ ...pollData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(pollData)
        axios.post(`${backUrl}/admin/addpoll`, pollData)
        .then((res) =>{
            console.log(res)
            alert(res.data)
            window.location.reload()
        })
    }

    useEffect(() => {
      axios.get(`${backUrl}/admin/getpolls`)
      .then((res)=>{
        console.log(res, "polls list")
      })
    }, [])

    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("No email found")
            navigate('/')

        }

    }, [])
    

    return (
        <div>

            <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                <h1 className="text-xl font-bold mb-4 text-center">Create a Poll</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                            Enter Match Title
                        </label>
                        <input
                            type="text"
                            id="question"
                            name="question"
                            value={pollData.question}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter your poll question"
                            required
                        />
                    </div>
                    <p className='text-sm font-medium'>Who will win ?</p>
                    <div>
                        <label htmlFor="option1" className="block text-sm font-medium text-gray-700">
                            Option 1
                        </label>
                        <input
                            type="text"
                            id="option1"
                            name="option1"
                            value={pollData.option1}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter option 1"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="option2" className="block text-sm font-medium text-gray-700">
                            Option 2
                        </label>
                        <input
                            type="text"
                            id="option2"
                            name="option2"
                            value={pollData.option2}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter option 2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit Poll
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Polls