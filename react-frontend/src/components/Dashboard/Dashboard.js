import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Modal from 'react-modal/lib/components/Modal';
import TutorService from '../../services/TutorService';
import StudentService from '../../services/StudentService';
export default function Dashboard(props) {

    let location = useLocation();
    let account = location.state;

    const [isOpen, setIsOpen] = useState(false);
    const [tutors, setTutors] = useState([])
    const [schedule, setSchedule] = useState([])
    useEffect(() => {
      getTutors();
      getSchedule();
    }, [])

    function getSchedule() {
      StudentService.getSchedule(account.id).then((res) => {
        getTutorById(res.data)
      })
      .catch((err) => console.log(err.message))
    }

    function getTutors() {
      TutorService.getTutors().then((res) => {
        res.data.map((tutor) => (
          getAvail(tutor)
        ))
      })
      .catch((err) => console.log(err.message))
    }

    function getAvail(tutor) {
      TutorService.getTutorSchedule(tutor.id).then((res) => {
        tutor.avail = res.data;
        setTutors(oldArr => [...oldArr, tutor]);
      })
      .catch((err) => console.log(err.message))
    }

    function toggleModal() {
      setIsOpen(!isOpen);
    }
    //books appt from tutor availability
    function bookAppt(avail) {
      
      let schedule = {apptDate: avail.apptDate, 
                      endTime: avail.endTime,
                      studentId: account.id,
                      tschedId: avail.schedId,
                      tutorId: avail.tutorId};
      StudentService.bookAppt(schedule, account.id).then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err.data))
    }

    //since JS is inhospitable, I have to make another GET to find the tutor from the id
    function getTutorById(data){
      data.map((appt) => {
        TutorService.getTutorById(appt.tutorId).then((res) => {
          appt.tutor = `${res.data.firstName} ${res.data.lastName}`
          
        })
      })
      setSchedule(data);
    }
    
    function cancelAppt(appt) {
      delete appt.tutor
      
      StudentService.cancelAppt(appt).then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err.message))
    }



    return(
    <div>
        <h1>Dashboard</h1>
        <h2>Welcome back, {account.firstName}!</h2>
        <br></br>
        <h3>Appointments</h3>
        <button className='btn btn-info' type='button' onClick={toggleModal}>Add Appointment</button>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Tutor</th>
              <th>Appointment</th>
            </tr>
          </thead>
          <tbody>
            {
              schedule.map((appt) => 
                <tr key={appt.schedId}>
                  <td>{appt.tutor}</td>
                  <td>{`${appt.apptDate} - ${appt.endTime}`}</td>
                  <td>
                    <button value={appt} className='btn btn-danger' onClick={() => cancelAppt(appt)}>cancel appointment</button>
                  </td>
                </tr>
                )
            }
          </tbody>
        </table>


        <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Tutor Availabilities" ariaHideApp={false}>
          <button className='btn btn-danger' onClick={toggleModal}>Close</button>
          <div>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Tutor</th>
                  <th>Availabilities</th>
                </tr>
              </thead>
              <tbody>
                {
                  tutors.map((tutor) => 
                  <tr key={tutor.id}>
                    <td>{tutor.firstName}</td>
                    <td>
                      {tutor.avail.map(avail => 
                        <button value={avail} key={avail.apptDate} className='btn btn-primary' onClick={() => bookAppt(avail)}>{`${avail.apptDate} - ${avail.endTime}`}</button>
                        )}
                      </td>
                  </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </Modal>
            
            
            
            
    </div>);
}
