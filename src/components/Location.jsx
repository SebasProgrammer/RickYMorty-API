import React from 'react';
// import '../assets/Location.css'
import '../App.css'

const Location = ( {rickLocation}) => {
    return (
        <div className='cardLocation'>
            <h1>Information Location</h1>
            <p> <strong>Title: </strong> {rickLocation.name}</p>
            <p> <strong>ID: </strong> {rickLocation.id}</p>
            <p><strong>Tipo: </strong>{rickLocation.type}</p>
            <p><strong>Dimensión: </strong>{rickLocation.dimension} </p>
            <p><strong>Residentes: </strong>{rickLocation.residents?.length}</p>
        </div>
    ); 
};

export default Location;