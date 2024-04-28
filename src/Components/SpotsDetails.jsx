import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherSunny } from "react-icons/ti";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { Helmet } from 'react-helmet';

const SpotsDetails = () => {
    const spot = useLoaderData();
    console.log(spot);
    const { country, name, photo, visitor, location, seasonality, description, cost, time, userName, email } = spot;

    return (
        <div className='w-11/12 mx-auto shadow-xl rounded-lg p-4 md:p-10 space-y-4'>
            <Helmet>
                <title>Details Page</title>
            </Helmet>
            <h2 className='text-3xl font-serif font-bold'>{country} : {name}</h2>
            <div className='md:flex gap-28 font-serif font-bold '>
                <p className='flex justify-center items-center gap-2'><FaLocationDot /> : {location}</p>
                <p className='flex justify-center items-center gap-2'><TiWeatherSunny /> : {seasonality}</p>
            </div>
            <img className='w-full object-cover object-center md:h-[500px] rounded-md' src={photo} alt="" />
            <p className='text-justify text-lg font-sans'>{description}</p>
            <div className='md:flex gap-28 text-xl font-serif font-semibold text-[#F95A65]'>
                <p className='flex justify-center items-center gap-2'>Price : From <FaBangladeshiTakaSign />{cost} per person</p>
                <p className='flex justify-center items-center gap-1'>Duration : <MdAccessTimeFilled />{time} Days</p>
            </div>
            <p className='text-lg font-serif font-semibold'>More then {visitor} Million people visit per year</p>
            <div className='space-y-2 mt-28'>
                <h2 className="text-2xl font-serif font-semibold mt-10">Contact Person</h2>
                <hr className='w-[270px] border' />
                <div className='text-xl font-serif font-semibold'>
                    <p>{userName}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default SpotsDetails;