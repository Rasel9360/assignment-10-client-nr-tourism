import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateSpots = () => {
    const {id} = useParams()
    const [spot, setSpot] = useState([]);

    console.log(id);

    useEffect(()=>{
        fetch(`https://assignment-ten-server-bay.vercel.app/singleSpot/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSpot(data)
        })
    },[])

    return (
        <div>
            <h2 className="text-5xl">Update page</h2>
        </div>
    );
};

export default UpdateSpots;