import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import axios from "axios"

const TextEditor = () => {
  const backUrl = process.env.REACT_APP_BACK_URL
  const [selectedFile, setSelectedFile] = useState(null);

  const [news, setNews] = useState(
    {
      headline: '',
      text: '',
      title: "",
      permalink: "",
      description: "",

    }
  );

  // Custom toolbar options
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
      setSelectedFile(file);
      console.log('File selected:', file); // For debugging, shows file details in console
    }
  };

  const handleChange = (name, value) => {
    setNews((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };



  const submitNews = (e) => {
    e.preventDefault();


    const responseData = {
      ...news,
      selectedFile: selectedFile ? selectedFile : null

    };

    if (!news.headline.trim()) {
      alert('Please fill in the field before submitting.');
      return;
    }

    if (!news.text.trim()) {
      alert('Please fill in the  field before submitting.');
      return;
    }

    if (!selectedFile) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    axios.post(`${backUrl}/admin/addnews`, responseData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then((res) => {
      console.log(res)
      alert(res.data)
      window.location.reload()
    }).catch((err) => {
      console.log(err)
    })


  };



  return (

    <div className='gap-4 grid mt-5  min-w-72 w-full items-center justify-center'>


      <div>
        <p className='text-lg font-medium text-blue-950'>Add  news banner</p>

        <div className=" items-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              name="selectedFile"

              className="hidden"
              onChange={handleFileChange}
            />
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
        <p className='text-lg font-medium text-blue-950'>Add  news head line</p>
        <ReactQuill
          className='w-full rounded-lg'
          id="headline"
          name="headline"
          value={news.headline}
          onChange={(value) => handleChange('headline', value)}
          modules={modules}
          placeholder="headline..." />
      </div>

      <div>
        <p className='text-lg font-medium text-blue-950'>Add  news</p>
        <ReactQuill
          className='w-full rounded-lg'
          id='text'
          name="text"
          value={news.text}
          onChange={(value) => handleChange('text', value)}
          modules={modules}
          placeholder="news..." />
      </div>


      <p className='text-lg font-medium text-blue-950'>Add SEO here </p>



      <div className="mb-4 py-4 px-4 hidden rounded-md bg-gray-100">
        <label className="block text-lg font-medium text-gray-700" for="title">Title</label>
        <input id="title" type="text" name='title' value={news.title} onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        <span className='text-sm text-gray-500'>This is what will appear in the first line when this post shows up in the search results.</span>
      </div>

      <div className="mb-4  py-4 px-4 bg-gray-100 rounded-md">
        <label className="block text-lg font-medium text-gray-700" for="permalink">Permalink</label>
        <input type="text" id='permalink' name='permalink' value={news.permalink} onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
        <span className='text-sm text-gray-500'>This is the unique URL of this page, displayed below the post title in the search results.</span>
      </div>

      <div className="mb-4 py-4 px-4 rounded-md bg-gray-100">
        <label className="block text-lg font-medium text-gray-700" for="description">Tags </label>
        <textarea id="description" name='description' value={news.description} onChange={(e) => handleChange(e.target.name, e.target.value)} rows="4"
          className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />

      </div>

      <div className='text-center mb-20'>
        <button onClick={submitNews} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit News</button>
      </div>

    </div>
  );
};

export default TextEditor;
