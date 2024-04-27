import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const MyList = () => {
    const { user } = useContext(AuthContext)
    const [mySpots, setMySpots] = useState([])
    console.log(mySpots);


    useEffect(() => {
        fetch(`https://assignment-ten-server-bay.vercel.app/myProduct/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setMySpots(data)
            });
    }, [user]);

    const handleDelete = (id) =>{
        console.log(id);
        fetch(`https://assignment-ten-server-bay.vercel.app/spots/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }

    return (
        <div className="w-11/12 mx-auto shadow-xl p-10">
            <h2 className="text-4xl font-serif font-semibold text-center mb-8">My List</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg font-serif font-bold text-gray-700 textce">
                                <th></th>
                                <th>Spot Name</th>
                                <th>Country</th>
                                <th>Location</th>
                                <th>Average Cost</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mySpots.map((spot, idex) =>
                                    <tr key={idex}>
                                        <th>{idex + 1}</th>
                                        <td>{spot.name}</td>
                                        <td>{spot.country}</td>
                                        <td>{spot.location}</td>
                                        <td>{spot.cost} taka per person</td>
                                        <td><button onClick={()=>(handleDelete(spot._id))} className="text-xl text-red-700 "><MdDeleteForever /></button></td>
                                        <td><button className="text-xl"><FaEdit /></button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;