import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data/data.json'

// WE DID IT THIS WAY SO WE CAN GIVE A DIFFERENT STATE FOR EACH CARD COMPONENT
// AND IN THE CARDCONTAINER() WE RECREATE THE CARD AS MANY TIMES AS WE WANT
//  AND EACH ONE HAS ITS OWN STATE
function Card({d}) {
    return (
    
        <div className="car-container">
        
            <div className="car">                  
                <div className="car-header">
                    <h1>{d.name}</h1>
                    <a href="https://www.google.com/maps/place/Bawshar,+Muscat/@23.5631449,58.4017564,14z/data=!3m1!4b1!4m5!3m4!1s0x3e91fe1c5d42c1b3:0x5db3140a2a7dc33c!8m2!3d23.5651914!4d58.4201892">Location</a>
                </div>
                <div className="car-body">
                    <p><strong>Area: {d.Location}</strong></p>
                    <p><strong>Size: {d.size}</strong></p>
                    <p><strong>Phone: {d.phone}</strong></p>
                    <p className="btn" key={d.name}><Link to={`/booking/${d.name}`}>Book {d.name}</Link></p>                  
                </div>                              
            </div>
        
        </div> 
    )
}

function CardContainer() {
    return (
        <div className="row">
            {data.map(d => <Card d={d} />)}   
        </div>    
        
    )   
}
export default CardContainer
