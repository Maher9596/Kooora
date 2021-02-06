import React, {useState, useEffect} from 'react'


function Submit() {
    const [bookingData, setBookingData] = useState([])


useEffect(() => {
    let data = localStorage.getItem("myData") ? JSON.parse(localStorage.getItem("myData")) : []
    setBookingData(data)
}, [])

    return (
        <div className="submit-page">          
            <div className="submit-text">
                <p>Your booking has been confirmed!</p>
                <p>Review your booking details...</p>    
            </div>
            {bookingData.map(d => {
                return (
                    <div className="booking-details">
                    <p><strong>Name: {d.name}</strong></p>
                    <p><strong>Phone Number:{d.number}</strong></p>                                  
                    <p><strong>Provide water: {d.select}</strong></p>
                    <p><strong>Time: {d.time}</strong></p>
                    <p><strong>Date: {d.date}</strong></p>
                </div>
                )
            })}
           
            <a href="/">Go Back to Home Page</a>
        </div>
    )
}

export default Submit
