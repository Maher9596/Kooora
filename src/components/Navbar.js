import React from 'react' 
import {Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Booking from '../pages/Booking'
import Submit from '../pages/Submit'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <>
          <div className="head-text">
            <h1>KOOORA</h1>
            <p>Book your pitch and let the games begin</p>
          </div>
          
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/booking">
                    <Booking />
                </Route>               
                <Route exact path="/submit">
                    <Submit />
                </Route> 
                <Route path="/booking/:pitchName">
                    <Booking />
                </Route>                
            </Switch>
            </>
    )
}

export default Navbar
