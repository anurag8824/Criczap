import React, { useState,useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddVideo = () => {
    const backUrl = process.env.REACT_APP_BACK_URL
    const navigate = useNavigate();

    const [fullData, setFullData] = useState({
        title: '',
        link: '',
        Image: '',
    });

    // console.log(fullData);


    // Custom toolbar options for ReactQuill
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }], // Heading options
            ['bold', 'italic', 'underline'], // Text formatting
            [{ list: 'ordered' }, { list: 'bullet' }], // List formatting
            [{ script: 'sub' }, { script: 'super' }], // Subscript/Superscript
            [{ indent: '-1' }, { indent: '+1' }], // Indentation
            [{ direction: 'rtl' }], // Text direction
            [{ size: ['small', false, 'large', 'huge'] }], // Font size
            [{ color: [] }, { background: [] }], // Text color & background
            [{ align: [] }], // Alignment
            ['clean'] // Remove formatting
        ],
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            setFullData((prevData) => ({
                ...prevData,
                Image: file, // Update the Image field in the state
            }));
        }
    };


    const handleChange = (name, value) => {
        setFullData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Function to remove HTML tags from the title
    const stripHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    };

    const Submit = () => {
        if (!fullData.title || !fullData.link) {
            alert('Please fill in all fields before submitting.');
            return;
        }




        // console.log(fullData, "fulldata")

        axios.post(`${backUrl}/admin/addvideo`, fullData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then((res) => {
                console.log(res)
                alert(res.data)
                window.location.reload()
            })
    };

    useEffect(() => {
        const Email = localStorage.getItem('Email');  // get name of cookies
        console.log(Email, "email recieved from localstorage");
        if (Email == null) {
            console.log("No email found")
            navigate('/')

        }

    }, [])


    return (
        <div className='gap-4 grid mt-5 min-w-72 w-full items-center justify-center'>
            <div>
                <p className='text-lg font-medium text-blue-950'>Add Video banner</p>

                <div className="w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" name='Image' onChange={handleFileChange} />
                    </label>

                    {fullData.Image && (
                        <div className="mt-4 font-semibold text-sm text-gray-700">
                            {/* Display file details */}
                            <p>File name: {fullData.Image.name}</p>
                            <p>File size: {(fullData.Image.size / 1024).toFixed(2)} KB</p>
                        </div>
                    )}


                </div>
            </div>

            <div>
                <p className='text-lg font-medium text-blue-950'>Add Video headline</p>
                <ReactQuill
                    className='w-full rounded-lg'
                    id="title"
                    name="title"
                    value={fullData.title}
                    onChange={(value) => handleChange('title', value)}
                    modules={modules}
                    placeholder="Headline..."
                />
            </div>

            <div>
                <p className='text-lg font-medium text-blue-950'>Add YouTube Link</p>
                <div>
                    <input
                        type="url"
                        id="link"
                        name="link"
                        value={fullData.link}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="https://example.com"
                        required
                    />
                </div>
            </div>




            <div className='text-center mb-20'>
                <button onClick={Submit} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit News</button>
            </div>

        </div>
    );
};

export default AddVideo;
