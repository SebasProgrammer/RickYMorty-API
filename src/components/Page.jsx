import React from 'react';

const Page = ( {page, setPage, quantyPage}) => {
    return (
        <div>
            { page>0 &&
                <button onClick={()=> setPage(page-1)}>Anterior</button>
            }
                <p>{page} de {quantyPage}</p>
            {quantyPage > page &&
                <button onClick={()=> setPage(page+1)}>Siguiente</button>
            }
        </div>
    );
};

export default Page;