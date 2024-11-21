import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Players = ({data}) => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('ODI');

  // Function to handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

 

 
 

  return (
    <div className="space-y-4 mb-10">
      {/* Button group to select format */}
      <div className="flex gap-4 mb-4">
        <button 
          onClick={() => handleCategoryChange('ODI')}
          className={`px-4 py-2 rounded-md ${selectedCategory === 'ODI' ? 'bg-blue-950 text-white' : 'bg-gray-200'}`}
        >
          ODI
        </button>
        <button 
          onClick={() => handleCategoryChange('T20I')}
          className={`px-4 py-2 rounded-md ${selectedCategory === 'T20I' ? 'bg-blue-950 text-white' : 'bg-gray-200'}`}
        >
          T20I
        </button>
        <button 
          onClick={() => handleCategoryChange('Test')}
          className={`px-4 py-2 rounded-md ${selectedCategory === 'Test' ? 'bg-blue-950 text-white' : 'bg-gray-200'}`}
        >
          Test
        </button>
      </div>

      {/* Conditional rendering based on selected category */}
      <div className="md:grid grid-cols-2 gap-2 space-y-4 md:space-y-0">
        {selectedCategory === 'ODI' && data?.odi?.map((item, index) => (

          item ? 

          <div key={index} className="flex gap-4 border rounded-md px-3 py-3 items-center">
            <img
              src="/demoplayer.png" // You can replace with player-specific image
              alt={item.title}
              className="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
            />
            <p className="grid font-sans text-base font-normal leading-relaxed tracking-normal antialiased">
              <Link to={`/cricket-player-detail/${item.pid}`} className="cursor-pointer hover:underline">
                {item.title}
              </Link>
              <span>{item.playing_role}</span>
            </p>
          </div> : "Not Found"

        ))}


        {selectedCategory === 'T20I' && data?.t20i?.map((item, index) => (
          item ? 
          <div key={index} className="flex gap-4 border rounded-md px-3 py-3 items-center">
            <img
              src="/demoplayer.png" // You can replace with player-specific image
              alt={item.title}
              className="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
            />
            <p className="grid font-sans text-base font-normal leading-relaxed tracking-normal antialiased">
              <Link to={`/cricket-player-detail/${item.pid}`} className="cursor-pointer hover:underline">
                {item.title}
              </Link>
              <span>{item.playing_role}</span>
            </p>
          </div> : "Not Found"
        ))}

        {selectedCategory === 'Test' && data?.test?.map((item, index) => (

          item ?  
          <div key={index} className="flex gap-4 border rounded-md px-3 py-3 items-center">
            <img
              src="/demoplayer.png" // You can replace with player-specific image
              alt={item.title}
              className="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
            />
            <p className="grid font-sans text-base font-normal leading-relaxed tracking-normal antialiased">
              <Link to={`/cricket-player-detail/${item.pid}`} className="cursor-pointer hover:underline">
                {item.title}
              </Link>
              <span>{item.playing_role}</span>
            </p>
          </div> : "Not Found"
        ))}
      </div>
    </div>
  );
};

export default Players;
