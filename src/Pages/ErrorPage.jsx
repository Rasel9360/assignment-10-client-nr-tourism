import React from 'react';
import Lottie from "lottie-react";
import animation from '../../public/Animation .json'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='w-3/12 mx-auto'>
                <Lottie loop={true} animationData={animation} />
            </div>
            <div className='text-center space-y-3'>
                <h3 className='text-4xl font-serif font-semibold'>Sorry, we couldn't find this page.</h3>
                <p className='font-serif text-lg'>But dont worry, you can find plenty of other things on our homepage.</p>
                <div>
                    <Link >
                        <p className='w-1/2 mx-auto flex justify-center items-center gap-1 text-xl font-bold font-serif text-[#F95A65] btn btn-outline'><FaArrowAltCircleLeft /> Go to homepage</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;