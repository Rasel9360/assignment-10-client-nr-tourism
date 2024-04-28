import { useLoaderData, useNavigation } from "react-router-dom";
import AllSpotsCart from "../Components/AllSpotsCart";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllTouristSpots = () => {
    const allSpots = useLoaderData();
    const [spots, setSpots] = useState(allSpots);
    console.log(allSpots);

    const navigation = useNavigation();

    const handleSort = (sortBy) => {
        console.log(sortBy);
        const sortedSpots = [...spots];
        if (sortBy === "cost") {
            sortedSpots.sort((a, b) => a.cost - b.cost)
        }
        setSpots(sortedSpots);
    }

    if (navigation.state === "loading") {
        return <div className="flex min-h-screen justify-center items-center mt-28"><span className="loading loading-bars loading-lg text-[#F95A65]"></span></div>
    }


    return (
        <div>
            <Helmet>
                <title>All Tourist Spots</title>
            </Helmet>
            <h2 className="text-4xl font-serif font-semibold text-center bg-[#f8ebec] dark: p-6 mb-6">All Tourist Spots</h2>
            <div className="flex justify-center items-center mb-5">
                <details className="dropdown ">
                    <summary className="m-1 btn text-xl font-serif font-bold bg-[#F95A65] hover:bg-[#F95A65] text-[#fbf3f3]">Sort <FaChevronDown /></summary>
                    <ul className="p-2 rounded-md w-40 text-lg shadow menu dropdown-content z-[1] bg-base-100  ">
                        <li><a onClick={() => (handleSort("cost"))}>Average Cost</a></li>
                    </ul>
                </details>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-10'>
                {
                    spots.map(spot => <AllSpotsCart
                        key={spot._id}
                        spot={spot}>
                    </AllSpotsCart>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;