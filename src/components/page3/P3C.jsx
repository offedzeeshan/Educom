import * as React from "react";
// import Box from '@mui/material/Box';
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function Card3({ title, description, img, href, No, name, year, photo }) {
  const [value, setValue] = React.useState(2);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div>
            <p className="text-sm font-semibold text-[#6941C6]">Design</p>
          </div>
          <div className="font-bold text-xl mb-1">
            <a href={href}>{title}</a>
          </div>
          <p className="text-gray-700 text-base">{description}</p>
          <div className="flex items-center">
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={value} readOnly />
            <span>{`(${No})`}</span>
          </div>
        </div>
        <div className="px-6  ">
          <span className="inline-block rounded-full px-3 pt-1 text-sm font-semibold text-gray-700 mr-2 mb-0">
            <div className="flex items-center p-1 bg-white rounded-lg">
              <img
                src={photo}
                alt={`${name}`}
                className="w-8 h-8 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-600">{year}</p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
export default Card3;
