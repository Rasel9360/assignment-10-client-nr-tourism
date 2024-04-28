import React, { useState } from 'react';

const NewsLetter = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email submitted:", email);
        closeModal();
    };

    return (
        <div className='bg-[#f8ebec] py-10 mt-8'>
            <div className='mx-auto text-center space-y-3'>
                <h2 className='text-2xl md:text-3xl font-serif text-center font-semibold'>SIGN-UP TO OUR NEWSLETTER</h2>
                <p className='text-lg font-serif text-center'>Your semi-regular email of the latest research, insights, and platform tips.</p>
                <button onClick={openModal} className='btn btn-outline text-[#F95A65] text-lg font-bold font-serif'>SIGN UP NOW</button>
            </div>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-md max-w-md relative">
                        <button onClick={closeModal} className="border p-2 bg-[#f8ebec] text-center rounded-full text-[#F95A65] text-lg font-bold font-serif absolute right-3 top-3">X</button>
                        <h2 className="text-xl mb-4 text-center font-serif font-bold">Sign Up to our Newsletter</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className='flex gap-3'>
                                    <div>
                                        <input
                                            type="text"
                                            className="block w-full border border-gray-300 rounded-md shadow-sm mb-4 p-2"
                                            placeholder="Enter first name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="block w-full border border-gray-300 rounded-md shadow-sm mb-4 p-2"
                                            placeholder="Enter last name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        className="block w-full border border-gray-300 rounded-md shadow-sm mb-4 p-2"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline text-[#F95A65] w-full font-serif font-bold">SIGN UP</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsLetter;
