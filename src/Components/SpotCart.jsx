import React from 'react';
import { Link } from 'react-router-dom';

const SpotCart = ({ spot }) => {
    const { _id, country, name, photo, visitor } = spot;

    

    return (
        <div className="rounded-md shadow-md border flex flex-col">
            <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8 flex-grow">
                <div className="space-y-2">
                    <h2 className="text-md font-semibold font-serif tracking-wide">Country : {country}</h2>
                    <p className=" text-2xl font-serif">{name}</p>
                    <p className='font-serif'>
                        {visitor} Million people visit per year
                    </p>
                </div>
                <Link to={`/details/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#F95A65] hover:bg-[#f24652] text-gray-900 dark:text-gray-50 bottom-0">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SpotCart;