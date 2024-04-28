import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'  
import { Helmet } from "react-helmet";

const AddTourist = () => {
    const {user} = useContext(AuthContext)
    // console.log(user.email);

    const handleAddTourist = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitor = form.visitor.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const userName = form.user.value;
        const description = form.description.value;
        const newSpots = {name,country,location,cost,seasonality,time,visitor,photo,email,userName,description, userId: user.email};
        console.log(newSpots);

        fetch('https://assignment-ten-server-bay.vercel.app/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpots)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Successful",
                    text: "Tourist spots added successful",
                    icon: "success"
                  });
            }
        })
        form.reset();
    }

    return (
        <div className="bg-[#F4F3F0] p-10 lg:px-24 w-11/12 mx-auto shadow-xl my-6 rounded-md">
            <Helmet>
                <title>Add Tourist Spot</title>
            </Helmet>
            <h2 className="text-3xl text-center font-bold font-serif text-[#F95A65] mb-6">Add Tourists Spots
            </h2>
            <form onSubmit={handleAddTourist}>
                <div className="md:flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Tourists Spot Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter spot name" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="label-text">Country Name</span>
                        </label>
                        <select name="country" className="select select-bordered w-full">
                            <option disabled selected>Select Country Name</option>
                            <option>Bangladesh</option>
                            <option>Thailand</option>
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Vietnam</option>
                            <option>Cambodia</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Enter location" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input type="number" name="cost" placeholder="Enter Average Cost" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="Enter seasonality" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="label-text">Travel Time</span>
                        </label>
                        <input type="number" name="time" placeholder="Enter Travel Time" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Total Visitors Per Year</span>
                        </label>
                        <input type="number" name="visitor" placeholder="Total Visitors Per Year" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo url" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">User Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter user email" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2 mt-6 md:mt-0">
                        <label className="label font-bold">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" name="user" placeholder="Enter user name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-6 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Short Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="description" id="" cols="30" rows="5" placeholder="Enter short description"></textarea>
                    </div>
                </div>
                {/* End of Labels */}
                <input type="submit" value="Add Tourist Spots" className="btn w-full bg-[#F95A65] hover:bg-[#f24652] text-white font-bold mt-6" />
            </form>
        </div>
    );
};

export default AddTourist;