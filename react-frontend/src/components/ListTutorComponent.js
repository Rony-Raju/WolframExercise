import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import TutorService from '../services/TutorService'

export default function ListTutorComponent() {

    const [tutors, setTutors] = useState([])
    useEffect(() => {
      getTutors();
    }, [])
    
    const getTutors = () => {
        TutorService.getTutors().then((response) => {
            setTutors(response.data)
        }); 
    }
  return (
    <div className='container'>
         <div className='text-center' style={{padding:10}}>
            <Link to="/add-tutor">
                <button className="btn btn-primary"> Add Tutor</button>
            </Link>
        </div>
        <h1 className='text-center'>Tutors List</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Tutor ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    tutors.map(
                        tutor =>
                        <tr key = {tutor.id}>
                            <td>{tutor.id}</td>
                            <td>{tutor.firstName}</td>
                            <td>{tutor.lastName}</td>
                            <td>{tutor.emailId}</td>
                            {console.log(tutor)}
                            <td>
                                <Link to={`/update-tutor/${tutor.id}`} state = {tutor}>
                                    <button className='btn btn-info'>Update Info</button>
                                </Link>
                                <Link to={`/tutor-schedule/${tutor.id}`} state = {tutor}>
                                    <button className='btn btn-info' style={{marginLeft:10}}>Schedule</button>
                                </Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
            </table>      

    </div>
  )
}
