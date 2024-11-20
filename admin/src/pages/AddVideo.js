import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const AddVideo = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const [fullData, setFullData] = useState({
        title: '',
        link: '',
        file: null,
    });

    console.log(fullData);


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
        const file = event.target.files[0];
        if (file) {
            setFullData((prevData) => ({
                ...prevData,
                file: file,
            }));
            console.log('File selected:', file); // For debugging, shows file details in console
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
        if (!fullData.title || !fullData.link || !fullData.file) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        // Clean the title to remove HTML tags (function assumed)
        const cleanedTitle = stripHtmlTags(fullData.title);

        // Log the combined data
        console.log("Full Video Data:", {
            Title: cleanedTitle,
            Link: fullData.link,
            File: fullData.file,
        });
    };


    return (
        <div className='gap-4 grid mt-5 min-w-72 w-full items-center justify-center'>
            <div>
                <p className='text-lg font-medium text-blue-950'>Add news banner</p>

                <div className="w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                    </label>

                    {selectedFile && (
                        <div className="mt-4 font-semibold text-sm text-gray-700">
                            <p>File name: {selectedFile.name}</p>
                            <p>File size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
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


            <p className='text-lg font-medium text-blue-950'>Add SEO here </p>



            <div className="mb-4 py-4 px-4 rounded-md bg-gray-100">
                <label className="block text-lg font-medium text-gray-700" for="title">Title</label>
                <input id="title" type="text"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                <span className='text-sm text-gray-500'>This is what will appear in the first line when this post shows up in the search results.</span>
            </div>

            <div className="mb-4 py-4 px-4 bg-gray-100 rounded-md">
                <label className="block text-lg font-medium text-gray-700" for="permalink">Permalink</label>
                <input type="text"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                <span className='text-sm text-gray-500'>This is the unique URL of this page, displayed below the post title in the search results.</span>
            </div>

            <div className="mb-4 py-4 px-4 rounded-md bg-gray-100">
                <label className="block text-lg font-medium text-gray-700" for="description">Description</label>
                <textarea id="description" rows="4"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />

            </div>

            <div className='text-center mb-20'>
                <button onClick={Submit} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit News</button>
            </div>

        </div>
    );
};

export default AddVideo;
