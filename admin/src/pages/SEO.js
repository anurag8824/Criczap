import React from 'react'

const SEO = () => {
    return (
        <div>



            <main className="max-w-4xl mx-auto p-6">
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
                <button type="button" className="text-white ml-20 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Submit</button>

            </main>
        </div>
    )
}

export default SEO