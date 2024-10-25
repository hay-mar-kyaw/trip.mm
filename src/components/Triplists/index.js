import React, { useEffect, useState } from 'react'


export default function Index() {
    let [trips,setTrip] = useState([]);
    let [url,setUrl] = useState("http://localhost:3000/trips")

    useEffect(() => {
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            setTrip(data);
        })
    }, [url]);

    console.log(trips);
    
  return (
    <div>
        <h1>Ready to go?</h1>
        <button onClick={()=>setUrl("http://localhost:3000/trips")}>All</button>
        <button onClick={()=>setUrl("http://localhost:3000/trips?location=Myanmar")}>Tirp in Myanmar</button>
        <ul>
            {trips.map(trip=>(
                <li key={trip.id}>
                    <h3>{trip.name}</h3>
                    <p>price - {trip.price} MMK</p>
                    <p>location- {trip.location}</p>
                </li>
            ))}
            
        </ul>
    </div>
  )
}
