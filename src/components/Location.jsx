import React from 'react';

const Location = ( {rickLocation}) => {
    return (
        <div className='cardLocation'>
            <h1>{rickLocation.name}</h1>
            <p>{rickLocation.id}</p>
            <p><strong>Tipo: </strong>{rickLocation.type}</p>
            <p><strong>Dimensión: </strong>{rickLocation.dimension} </p>
            <p><strong>Residentes: </strong>{rickLocation.residents?.length}</p>
        </div>
    ); 
};

export default Location;