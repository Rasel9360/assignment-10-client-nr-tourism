import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const AllSpotsCart = ({ spot }) => {
    const { _id, name, photo, visitor, cost, time, seasonality } = spot;
    return (
        <div className="rounded-md shadow-md border bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <img src={photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <p className="text-gray-100 dark:text-gray-800 text-2xl font-serif">{name}</p>
                    <div className='flex justify-between font-serif'>
                        <p className=''>
                            {visitor} Million people visit per year
                        </p>
                        <p>Season : {seasonality}</p>
                    </div>
                    <div className='flex justify-between font-serif font-bold'>
                        <p className='flex items-center'>Average Cost : {cost} <FaBangladeshiTakaSign /></p>
                        <p>Duration : {time} Days</p>
                    </div>
                </div>
                <Link to={`/details/${_id}`}>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#F95A65] hover:bg-[#f24652] text-gray-900 dark:text-gray-50 bottom-0">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AllSpotsCart;