import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Modal from 'react-modal/lib/components/Modal';
export default function Dashboard(props) {

    let location = useLocation();
    let account = location.state;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      axios.get("http://localhost:8080/api/v1/"+account.type+"/"+account.id+"/schedule").then((res) => {
        console.log(res.data)
      })
    })

    const toggleModal = () =>{
      setIsOpen(!isOpen);
    }

  return (
    <div>
        <h1>Welcome Back {account.firstName}!</h1>
        <button type="button" className='btn btn-primary' onClick={toggleModal}>Add Appointment</button>
        <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel='sample text' ariaHideApp={false}>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Available Tutors</th>
                <th>Appointment times</th>
              </tr>
            </thead>
            <tbody>
              <td>Sample</td>
              <td>Text</td>
            </tbody>
          </table>
          <button type="button" className='btn btn-danger' onClick={toggleModal}>Close</button>
        </Modal>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Scheduled Appointments</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
    </div>
  )
}
