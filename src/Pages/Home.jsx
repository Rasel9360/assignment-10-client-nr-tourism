import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import SpotCart from '../Components/SpotCart';
import Faq from '../Components/Faq';

const Home = () => {
    const touristSpots = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-4xl text-center font-bold font-serif my-10'>Tourists Spots</h1>
            {/* Tourist Spots container */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto'>
                {
                    touristSpots.slice(0, 6).map(spot => <SpotCart
                        key={spot._id}
                        spot={spot}>
                    </SpotCart>)
                }
            </div>
            {/* Faq container */}
            <div>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;