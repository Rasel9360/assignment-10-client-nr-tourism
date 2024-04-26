import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SpotsDetails = () => {
    const spot = useLoaderData();
    console.log(spot);
    const { _id, country, name, photo, visitor } = spot;

    return (
        <div>
            <img src={photo} alt="" />
        </div>
    );
};

export default SpotsDetails;