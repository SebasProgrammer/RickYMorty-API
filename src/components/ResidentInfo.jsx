import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResidentInfo = ( {url}) => {

    const [resident, setResident] = useState({})

    useEffect( ()=>{
        axios.get( url )
            .then(res => setResident(res.data))
    }, [])

    return (
        <div className='residentCard'>
            <img src={resident.image} alt="" />
            <h2>{resident.name}</h2>
            <p>{resident.status}</p>
            <p>{resident.origin?.name}</p>
            <p>{resident.episode?.length}</p>
        </div>
    );
};

export default ResidentInfo;