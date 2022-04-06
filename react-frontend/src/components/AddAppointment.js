import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TutorService from '../services/TutorService'


export default function AddAppointment() {
  const navigate = useNavigate;
  let location = useLocation();
  let tutor = location.state

  const [apptDate, setApptDate] = useState("")
  const [endTime, setEndTime] = useState("")
  

  let schedule = {tutorId: tutor.id, apptDate: apptDate, endTime: endTime}
  const createSchedule = () =>{
    TutorService.addTutorSchedule(schedule).then((response) => {
        console.log("response.data")
    }); 
  }

  return (
    <div>
      <h1 className='text-center'>Add Appointment</h1>
      <form role="form" className='col-lg-6 offset-lg-3'>
              <div className='row'>
                  <div className='form-group col-xs-4'>
                      <label className=''>Start Date:</label>                            
                      <input placeholder="Start Date"  className='form-control' onChange={e => setApptDate(e.target.value)}
                       />
                  </div>
              </div>
              <div className='row' >
                  <div className='form-group col-xs-4'>
                  <label className=''>End Time:</label>
                  <input placeholder="End Time" className='form-control' onChange={e=> setEndTime(e.target.value)}
                  />
                  </div>
              </div>
                  <br></br>
                  <Link to="/tutors">
                      <button className='btn btn-success' type="button" style={{marginBottom:10}} onClick={createSchedule}>Save</button>
                  </Link>
                  <Link to={`/tutor-schedule/${tutor.id}`} state={tutor}>
                      <button className='btn btn-danger' style={{marginBottom: 10, marginLeft: 10}}>Cancel</button>
                  </Link>
          </form>
    </div>
  )
}
