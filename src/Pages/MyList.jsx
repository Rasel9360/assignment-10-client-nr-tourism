import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";


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

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myProduct/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = mySpots.filter(spo => spo._id !== _id)
                        setMySpots(remaining)
                    })

            }
        });
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
                                        <td><button onClick={() => (handleDelete(spot._id))} className="text-xl text-red-700 "><MdDeleteForever /></button></td>
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