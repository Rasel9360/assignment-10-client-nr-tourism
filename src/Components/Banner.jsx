import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full slide-1 md:h-[500px]">
                <div className='flex justify-center items-center'>
                    <div >
                        <h1 className='text-6xl font-serif font-bold text-center text-white mb-5'>Bandarban</h1>
                        <p className='w-3/4 mx-auto text-center text-gray-200 font-sans text-lg'>Bandarban is a district in the Chittagong Division of Bangladesh. It is located in the southeastern part of the country and is known for its beautiful mountainous terrain, pristine rivers, and rich cultural heritage. The district is home to several indigenous tribes, including the Chakma, Hmar, Marma, and Tripuri peoples. Bandarban is also famous for its tea plantations, which cover a large area of the district's land. The district has a total population of around 1.2 million people and is a popular tourist destination, particularly for nature enthusiasts.</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full slide-2">
                <div className='flex justify-center items-center'>
                    <div >
                        <h1 className='text-6xl font-serif font-bold text-center text-white mb-5'>Cox's Bazar</h1>
                        <p className='w-3/4 mx-auto text-center text-gray-100 font-sans text-lg'>Cox's Bazar Sea Beach is a popular tourist destination in Bangladesh. Located on the southeastern coast of the country, it is known for its beautiful beaches, crystal clear waters, and a variety of water sports activities. The beach stretches over 75 kilometers and is surrounded by a bustling city with a rich cultural heritage. Visitors can enjoy activities like swimming, sunbathing, jet skiing, and windsurfing. The beach is also home to a number of hotels, restaurants, and shops.</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full slide-3">
                <div className='flex justify-center items-center'>
                    <div >
                        <h1 className='text-6xl font-serif font-bold text-center text-white mb-5'>Sundarbans</h1>
                        <p className='w-3/4 mx-auto text-center text-gray-200 font-sans text-lg'>Sundarban is the largest mangrove forest in the world, located in the Ganges Delta in Bangladesh. It covers an area of approximately 10,000 square kilometers and is a critically endangered ecosystem due to deforestation, climate change, and pollution. Sundarban is home to a diverse range of flora and fauna, including several endangered species such as the Bengal tiger, Indian elephant, and the Irrawaddy dolphin. The forest is also an important cultural and spiritual site for local communities, as it is believed to be home to the gods and goddesses of Hindu mythology. Efforts are being made to protect Sundarban through conservation
                        </p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full slide-4">
                <div className='flex justify-center items-center'>
                    <div >
                        <h1 className='text-6xl font-serif font-bold text-center text-white mb-5'>Rangamati</h1>
                        <p className='w-3/4 mx-auto text-center text-gray-200 font-sans text-lg'>Rangamati is a district in the southeastern part of Bangladesh. It is located on the banks of the Indranyani River and is known for its natural beauty, including lush green forests, rolling hills, and serene rivers. The district is home to a variety of ethnic groups, including Bengalis, Hmong, and Manipuri, and is known for its rich cultural heritage. There are many tourist attractions in the district, including the picturesque Rangamati Hill station, the serene Indranyani River, and the ancient ruins of the Sadharupjo Hill temple.</p>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;