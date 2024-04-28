import React from 'react';

const CountryCart = ({ country }) => {
    return (
        <div>
            <a rel="noopener noreferrer" href="#" className="border rounded-md hidden sm:block">
                <img role="presentation" className="object-cover w-full rounded h-52 dark:bg-gray-500" src={country?.image} />
                <div className="p-3 space-y-2">
                    <h3 className="text-2xl font-serif font-semibold">{country?.country}</h3>
                    <p className='text-justify font-sans text-lg'>{country?.description.slice(0,260)}....</p>
                </div>
            </a>
        </div>
    );
};

export default CountryCart;