import { useLoaderData, useNavigation } from "react-router-dom";
import AllSpotsCart from "../Components/AllSpotsCart";

const AllTouristSpots = () => {
    const allSpots = useLoaderData();
    console.log(allSpots);

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <div className="flex min-h-screen justify-center items-center mt-28"><span className="loading loading-bars loading-lg text-[#F95A65]"></span></div>
    }

    return (
        <div>
            <h2 className="text-4xl font-serif font-semibold text-center bg-[#f8ebec] p-6 mb-8">All Tourist Spots</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mb-10'>
                {
                    allSpots.map(spot => <AllSpotsCart
                        key={spot._id}
                        spot={spot}>
                    </AllSpotsCart>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpots;