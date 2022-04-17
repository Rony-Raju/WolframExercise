import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TutorService from '../services/TutorService'

export default function TutorSchedule(props) {

    const navigate = useNavigate;
    let location = useLocation();
    let tutor = location.state

    const [schedule, setSchedule] = useState([])
    useEffect(() => {
        getSchedule();
      }, [])

    const getSchedule = () => {
      TutorService.getTutorSchedule(tutor.id).then((response) => {
          setSchedule(response.data)
          console.log(response.data)
      }); 
  }

    const cancelAppt = () => {
      TutorService.deleteTutorSchedule(tutor.id, schedule.schedId).then((response) => {
        setSchedule(response.data)
    }); 
  }
  return (
    <div>
      <h1 className='text-center'>Availability</h1>
      <Link to='/dashboard' state={tutor}>
        <button className='btn btn-info glyphicon glyphicon-chevron-left' style={{marginLeft:10}}> Back to Dashboard</button>
      </Link>
      <div className='text-center' style={{padding:10}}>
            <Link to={`/add-apt`} state={tutor}>
                <button className="btn btn-primary">
                  Add Availability</button>
            </Link>
    
        </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Start time</th>
            <th>End time</th>
          </tr>
        </thead>
        <tbody>
        {
                    schedule.map(
                        appt =>
                        <tr key={appt.apptDate}>
                            <td>{appt.apptDate}</td>
                            <td>{appt.endTime}</td>
                            <td>
                                <Link to={`/update-tutor/${tutor.id}`} state = {tutor}>
                                    <button className='btn btn-info'>Update Info</button>
                                </Link>
                                <button className='btn btn-danger' style={{marginLeft: 10}} onClick={cancelAppt}>Cancel</button>
                            </td>
                        </tr>
                    )
                }
        </tbody>
      </table>
    </div>
  )
}
