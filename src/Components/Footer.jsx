import React from 'react';
import { FaFacebook, FaLinkedin, FaLocationDot, FaTwitter, FaVoicemail } from 'react-icons/fa6';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center space-y-10 p-10 bg-blue-950  text-white">
            <nav className="grid grid-flow-col gap-4">
                <a href='#' className="text-4xl font-bold font-serif"><span className="text-[#F95A65]">NR</span> Tourism</a>
            </nav>
            <div className='md:flex justify-center md:gap-28'>
                <nav className='text-lg text-start'>
                    <h3 className='text-xl font-serif mb-2'>Contact with us</h3>
                    <div className='flex gap-2'>
                        <p className='mt-1'><FaLocationDot /></p>
                        <p> Bay's Park Heights, Level-5, Plot-2, Road No-9, <br /> Dhanmondi R/A, Dhaka, Bangladesh</p>
                    </div>
                    <div className='flex gap-2 my-2'>
                        <p className='mt-1'><MdEmail /></p>
                        <p>contact@nrtourism.com</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='mt-1'><IoMdCall /></p>
                        <p>+88 20483449</p>
                    </div>
                </nav>
                <nav className='text-start mt-8 md:mt-0'>
                    <h3 className='text-xl font-serif mb-2'>Find us on social media</h3>
                    <div className="flex gap-5  text-2xl">
                        <a href='#'><FaFacebook /></a>
                        <a href='#'><FaTwitter /></a>
                        <a href='#'><FaLinkedin /></a>
                    </div>
                </nav>
            </div>
            <hr />
            <aside>
                <p>Copyright © 2024 - All right reserved by NR Tourism</p>
            </aside>
        </footer>
    );
};

export default Footer;