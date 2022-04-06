import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TutorService from '../services/TutorService'

export default function CreateTutorComponent() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailId, setEmailId] = useState("")
  const[password, setPassword] = useState("")

  let tutor = {firstName: firstName, lastName: lastName, emailId: emailId, password: password}
  
  const createTutor = (tutor) =>{
    TutorService.createTutor(tutor).then((response) => {
        console.log("response.data")
    }); 
  }
  
  return (
    <div >
      <div className='container col-lg-8' style={{marginTop:10, border:"1px solid"}}>
          <h3 className='text-center'>Add Tutor</h3>
          <form role="form" className='col-lg-6 offset-lg-3'>
              <div className='row'>
                  <div className='form-group col-xs-4'>
                      <label className=''>First Name:</label>                            
                      <input placeholder="First Name" value={tutor.firstName} onChange={e => setFirstName(e.target.value)} className='form-control'
                       />
                  </div>
              </div>
              <div className='row' >
                  <div className='form-group col-xs-4'>
                  <label className=''>Last Name:</label>
                  <input placeholder="Last Name" value={tutor.lastName} onChange={e => setLastName(e.target.value)} className='form-control'
                  />
                  </div>
              </div>
              <div className='row' >
                  <div className='form-group col-xs-4'>
                  <label className=''>Email Address:</label>
                  <input placeholder="Email Address" value={tutor.emailId} onChange={e => setEmailId(e.target.value)} className='form-control'
                   />
                  </div>
              </div>
              <div className='row' >
                  <div className='form-group col-xs-4'>
                  <label className=''>Password:</label>
                  <input placeholder="Password" value={tutor.password} onChange={e => setPassword(e.target.value)} className='form-control'
                  />
                  </div>
              </div>
                  <br></br>
                  <Link to="/tutors">
                      <button className='btn btn-success' type="button" style={{marginBottom:10}} onClick={() => {
                          createTutor(tutor);
                      }} >Save</button>
                  </Link>
                  <Link to="/tutors">
                      <button className='btn btn-danger' style={{marginBottom: 10, marginLeft: 10}} >Cancel</button>
                  </Link>
          </form>                
      </div>
  </div>
  );
}
