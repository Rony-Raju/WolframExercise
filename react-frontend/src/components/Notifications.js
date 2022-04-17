import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import StudentService from '../services/StudentService';
import TutorService from '../services/TutorService';

export default function Notifications(props) {
    let location = useLocation();
    let account = location.state;
    const [notifications, setNotifcations] = useState([]);
    useEffect(() => {
        if(account.type === 'tutors') {
            TutorService.getNotifications(account.id).then((res) => {
                setNotifcations(res.data)
            })
            .catch((err) => console.log(err.message))
        }
        else if(account.type === 'students') {
            StudentService.getNotifications(account.id).then((res) => {
                setNotifcations(res.data)
            })
            .catch((err) => console.log(err.message))
        }
    }, [])

    function deleteNote(noteId) {
        if(account.type === 'tutors') {
            
            TutorService.deleteNotification(account.id, noteId).then((res) => window.location.reload())
            .catch((err) => console.log(err.message))
        }
        else if(account.type === 'students') {
            StudentService.deleteNotification(account.id, noteId).then((res) => window.location.reload())
            .catch((err) => console.log(err.message))
        }
        
        
       
    }

  return (
    <div className='container'>
         <div className='text-center' style={{padding:10}}>
            <Link to="/dashboard" state={account}>
                <button className="btn btn-primary">Back to Dashboard </button>
            </Link>
        </div>
        <h1 className='text-center'>Notifications</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>messages</th>
                </tr>
            </thead>
            <tbody>
                {
                    notifications.map((note) =>
                    <tr key = {note.id}>
                        <td>{note.message}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => deleteNote(note.id)}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
            </table>      

    </div>
  )
}
