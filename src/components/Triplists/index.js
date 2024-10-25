import React, { useCallback, useEffect, useState } from 'react'
import './index.css'


export default function Index() {
    let [trips,setTrip] = useState([]);
    let [url,setUrl] = useState("http://localhost:3000/trips")

    let fetchTrip = useCallback(() =>{
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            setTrip(data);
        })
    },[url])

    useEffect(() => {
        fetchTrip();
    }, [fetchTrip]);

    console.log(trips);
    
  return (
    <div className='container'>
        <div className="flex-container">
            <h1>Ready to go?</h1>
            <div>
                <button onClick={()=>setUrl("http://localhost:3000/trips")}>All</button>
                <button onClick={()=>setUrl("http://localhost:3000/trips?location=Myanmar")}>Tirp in Myanmar</button>
            
            </div>
            <ul className='trips-list'>
                {trips.map(trip=>(
                    <li key={trip.id} className="trip">
                        <h3>{trip.name}</h3>
                        <p>price - {trip.price} MMK</p>
                        <p>location- {trip.location}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    </div>
  )
}
