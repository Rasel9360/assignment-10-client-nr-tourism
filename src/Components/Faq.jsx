import Lottie from "lottie-react";
import FaqAnimation from "../../public/Faq.json";

const Faq = () => {
    return (
        <section className=" text-gray-100 dark:text-gray-800 w-11/12 mx-auto">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center font-serif my-10">Frequently Asked Questions</h2>
                <div className="md:flex justify-center items-center gap-10">
                    <div className="md:w-1/2">
                        <Lottie animationData={FaqAnimation} />
                    </div>
                    <div className="space-y-4 md:w-[60%]">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">What are the must-visit attractions in Bangladesh</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">In Bangladesh, you shouldn't miss iconic landmarks such as Dhaka, Cox's Bazar, and Bandarban. These sites offer unique experiences and showcase the rich cultural heritage of our region. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">How can I book accommodations for my trip?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">Booking accommodations is easy! Simply visit our website or contact our customer support team to browse through a wide range of hotels, resorts, and vacation rentals in [Your Destination]. We offer competitive rates and flexible booking options to suit your preferences.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">What outdoor activities are available for adventure enthusiasts?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">Adventure awaits in Cox's Bazar! From exhilarating hiking trails and thrilling water sports to exciting wildlife safaris, there's no shortage of outdoor activities for adventure seekers. Explore the rugged terrain, embark on a guided expedition, or simply unwind amidst nature's splendor. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">Are there any family-friendly attractions in Thailand</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">Absolutely! Thailand is a fantastic destination for families, with a plethora of attractions suitable for all ages. Enjoy fun-filled days at theme parks, interactive museums, and animal sanctuaries, ensuring unforgettable memories for the whole family.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 font-serif text-lg">What culinary delights can I savor during my visit?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">Indulge your taste buds with the diverse flavors of  culinary scene! From street food stalls serving local delicacies to upscale restaurants offering international cuisine, there's something to satisfy every palate. Don't miss the opportunity to sample traditional dishes and regional specialties.</p>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;