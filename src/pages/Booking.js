import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import data from '../data/data.json'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


function Booking() {
    const {pitchName} = useParams()
    const history = useHistory()
    const [user, setUser] = useState("")
    const [number, setNumber] = useState("")
    const [time, setTime] = useState("")
    const [select, setSelect] = useState("")
    const [submit, setSubmit] = useState("Submit")
    const [date, setDate] = useState(new Date())

    const thisName =  data.find(element => element.name === pitchName)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit("Booking...")
        setTimeout(() =>{ history.push("/submit")}, 3000)      
       
    }
    
    const setData = () => {
        let details = {name:user, number:number, time:time, select:select, date:date}
        let newDetails = [details]
        localStorage.setItem("myData", JSON.stringify(newDetails))
    }
    
    return (
    <div className="form-container">
        <div className="form-row">               
            <form className="form" onSubmit={handleSubmit} >
                <Calendar className="cal"
                    value={date}
                    onChange={setDate}                                
                /> 
                <div className="form-text"> 
                <h1 style={{color: "#fff"}}>Booking for {thisName.name} pitch</h1>                     
                <input className="input" type="text" placeholder="Enter Your Name"  required value={user} onChange={(e) => {setUser(e.target.value)}} /> 
                <br />                           
                <input className="input" type="text" placeholder="Enter Your Number"  value={number} onChange={(e) => {setNumber(e.target.value)}}/> 
                <br />            
                <select className="input" value={time} onChange={(e) => {setTime(e.target.value)}} >
                <option value=""  disabled selected hidden>Select Time</option>
                <option className="t" style={{color: 'black'}}>18:00 - 19:00</option>
                <option className="t" style={{color: 'black'}}>19:00 - 20:00</option>
                <option className="t" style={{color: 'black'}}>20:00 - 21:00</option>
                <option className="t" style={{color: 'black'}}>21:00 - 22:00</option>
                <option className="t" style={{color: 'black'}}>22:00 - 23:00</option>
                <option className="t" style={{color: 'black'}}>23:00 - 00:00</option>
                </select>
                <br />  
                <div className="msg">                
                <select className="input" value={select} onChange={(e) => {setSelect(e.target.value)}}>
                    <option value=""  disabled selected hidden>Provide water?</option>
                    <option className="choice" style={{color: 'black'}}>Yes</option>
                    <option className="choice" style={{color: 'black'}}>No</option>
                </select>   
                </div>
                <br />              
                <button className="submit" onClick={ () => setData()} >{submit}</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Booking
