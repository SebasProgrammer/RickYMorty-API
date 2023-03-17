import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Location from './Location';
import ResidentInfo from './ResidentInfo';
import Page from './Page';

const Api = () => {

    const [rickLocation, setRickLocation] = useState({})

    useEffect( () => {
        let idLocation = Math.floor( Math.random() * 126 ) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
            .then(res => setRickLocation(res.data))
    }, [])

    console.log(rickLocation)

    const [searchLoc, setSearchLoc] = useState("")

    const search = () => {
        if (searchLoc < 127 && searchLoc > 0) {
        axios.get(`https://rickandmortyapi.com/api/location/${searchLoc}`)
            .then(res => setRickLocation(res.data))
        } else{
            alert("Entrada no válida")
        }
        setSearchLoc("")
        setPage(1)
    }

    const [page, setPage] = useState(1)
    const perPage = 4
    const quantyPage = Math.ceil(rickLocation.residents?.length/perPage)

    const firstIndex = (page - 1) * perPage
    console.log(quantyPage)

    const residents = rickLocation.residents?.slice(firstIndex, firstIndex+perPage)

    return (
        <div>
            <div className='find'>
                <input type="number" max={126} min={1} value={searchLoc} onChange = {(e) => setSearchLoc(e.target.value)} placeholder="Locación [1-126]"/>
                <button className='search' onClick={search}><i className="bx bx-search"></i></button>
            </div>
            <br />
            <Location rickLocation={rickLocation}/>
            <br />
            <Page page={page} setPage={setPage} quantyPage={quantyPage} residents={rickLocation.residents?.length}/>
            <br />

            <h1>Residents</h1>
            <div className='residentsList'>
                { residents?.map((r)=>(
                    <ResidentInfo url={r} key={r}/>
                    ))
                }
            </div>
        </div>
            
    );
};

export default Api;