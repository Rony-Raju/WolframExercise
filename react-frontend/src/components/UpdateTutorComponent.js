import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import TutorService from '../services/TutorService'

export default function UpdateTutorComponent(props) {
    
    const navigate = useNavigate;
    let location = useLocation();
    
    let details = location.state
    
    const [firstName, setFirstName,] = useState(details.firstName)
    const [lastName, setLastName] = useState(details.lastName)
    const [emailId, setEmailId] = useState(details.emailId)
    const[password, setPassword] = useState(details.password)

    

    let tutor = {id: details.id, firstName: firstName, lastName: lastName, emailId: emailId}
    
    const updateTutor = (tutor) => {
        TutorService.updateTutor(tutor.id, tutor).then((response) => {
            console.log(response.data)         
        });     
    }

    return (
            <div >
                <div className='container col-lg-8' style={{marginTop:10, border:"1px solid"}}>
                    <h3 className='text-center'>Edit Tutor</h3>
                    <form role="form" className='col-lg-6 offset-lg-3'>
                        <div className='row'>
                            <div className='form-group col-xs-4'>
                                <label className=''>First Name:</label>                            
                                <input placeholder={details.firstName} name="firstName" onChange={e => setFirstName(e.target.value)} className='form-control'
                                 />
                            </div>
                        </div>
                        <div className='row' >
                            <div className='form-group col-xs-4'>
                            <label className=''>Last Name:</label>
                            <input placeholder={details.lastName} name="lastName" onChange={e => setLastName(e.target.value)} className='form-control'
                            />
                            </div>
                        </div>
                        <div className='row' >
                            <div className='form-group col-xs-4'>
                            <label className=''>Email Address:</label>
                            <input placeholder={details.emailId} name="emailId" onChange={e => setEmailId(e.target.value)}  className='form-control'
                           />
                            </div>
                        </div>
                            <br></br>
                            <Link to="/tutors">
                                <button className='btn btn-success' onClick={()=>{updateTutor(tutor)}}style={{marginBottom:10}}>Save</button>
                            </Link>
                           
                           
                            <Link to = "/tutors">
                                <button className='btn btn-danger' style={{marginBottom: 10, marginLeft: 10}} >Cancel</button>
                            </Link>                            
                    </form>                
                </div>
            </div>
                
    );
}
