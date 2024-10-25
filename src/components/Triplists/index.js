import React, { useEffect, useState } from 'react'


export default function Index() {
    let [trips,setTrip] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/trips")
        .then(res=> res.json())
        .then(data => {
            setTrip(data);
        })
    }, []);

    console.log(trips);
    
  return (
    <div>
        <h1>Ready to go?</h1>
        <ul>
            {trips.map(trip=>(
                <li>
                    <h3>{trip.name}</h3>
                    <p>price - {trip.price} MMK</p>
              </li>
            ))}
            
        </ul>
    </div>
  )
}
