import React from 'react';

const HorizontalCard = ({ title, image, description }) => {
  return (
    // <div className="flex max-w-md rounded overflow-hidden bg-white">
    //   <img className="object-fill" src={image} alt={title} />
    //   <div className="ml-3">
    //     <h2 className="font-bold text-l mb-2">{title}</h2>
    //     <p className="text-gray-700 text-start">{description}</p>
        
    //   </div>
    // </div>
    <div className="max-w-72 mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt="Card"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="p-4">
        <button className=" text-gray-700 px-4 py-2 rounded-lg">
          Learn  More
        </button>
      </div>
    </div>
  );
};

export default HorizontalCard;