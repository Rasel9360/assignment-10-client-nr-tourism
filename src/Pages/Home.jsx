import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SpotCart from '../Components/SpotCart';
import Faq from '../Components/Faq';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
    const touristSpots = useLoaderData()

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <div className="flex min-h-screen justify-center items-center mt-28"><span className="loading loading-bars loading-lg text-[#F95A65]"></span></div>
    }
    
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
            <div>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;