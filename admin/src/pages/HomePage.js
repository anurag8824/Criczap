import React, { useState, useEffect } from 'react'
import './CustomScrollbar.css';
import { useNavigate } from "react-router-dom"
import axios from "axios"


const HomePage = () => {
  const navigate = useNavigate()
  const backUrl = process.env.REACT_APP_BACK_URL

  const [loginData, setLoginData] = useState({
    Email: '',
    Password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };



  const submit = (e) => {
    e.preventDefault()

    try {
      axios.post(`${backUrl}/admin/adminlogin`, loginData)
        .then((res) => {
          console.log(res)
          if (res.data.msg == "Email is not exist!" || res.data.msg == "Password is wrong") {
            alert(res.data.msg)

          } else {
            localStorage.setItem("Email", loginData.Email);
            console.log(localStorage.getItem("Email"));
            navigate("/dashboard")

          }

        })
    } catch (error) {
      console.log(error)

    }

    // console.log(loginData)


  }



  const [showlogged, setShowlogged] = useState(true);

  useEffect(() => {
    const Email = localStorage.getItem('Email');  // get name of cookies
    console.log(Email, "email recieved from localstorage");
    if (Email == null) {
      console.log("No email ")
      setShowlogged(true);


    }
    else {
      setShowlogged(false);

    }

  }, [])





  return (

    <div className='md:min-h-screen md:pb-0 pb-10'>

      {showlogged ?


        <div className='border bg-white p-4 mx-auto mt-12 items-center   md:w-1/2'>
          <p className='text-center'>Criczap Admin Login</p>


          <form onSubmit={submit} class="max-w-sm mx-auto">
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                type="email"
                id="email"
                name='Email'
                value={loginData.Email}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>

            <div class="mb-5">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input
                type="password"
                id="password"
                name='Password'
                value={loginData.Password}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div class="flex items-start mb-5">
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

        </div>

        : "You are Logged in as Criczap Admin"}




    </div>)
}

export default HomePage