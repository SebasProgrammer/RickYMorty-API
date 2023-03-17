import React from 'react';
import '../App.css'

const Page = ( {page, setPage, quantyPage, residents}) => {
    return (
        
        <div className='pageCard'>
            { page>1 && residents>0 &&
                <button onClick={()=> setPage(page-1)}>Anterior</button>
            }
            { quantyPage >0 &&
                <p>{page} de {quantyPage}</p>
            }
            {quantyPage > page && residents>0 &&
                <button onClick={()=> setPage(page+1)}>Siguiente</button>
            }
        </div>
    );
};

export default Page;