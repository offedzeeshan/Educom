import React from 'react';

const HorizontalCard = ({ title, image, description }) => {
  return (
    <div className="flex max-w-md rounded overflow-hidden bg-white">
      <img className="object-fill max-w-64 max-h-24" src={image} alt={title} />
      <div className="ml-3">
        <h2 className="font-bold text-l mb-2">{title}</h2>
        <p className="text-gray-700 text-start">{description}</p>
        
      </div>
    </div>
  );
};

export default HorizontalCard;