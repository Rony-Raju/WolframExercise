import Modal  from 'react-modal/lib/components/Modal';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select/'
import StudentService from '../services/StudentService'
import TutorService from '../services/TutorService'

export default function CreateTutorComponent() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailId, setEmailId] = useState("")
  const[password, setPassword] = useState("")
  const [isOpen, setIsOpen] = useState(false);

  let account = {firstName: firstName, lastName: lastName, emailId: emailId, pass: password}
  const accounts = [
    {label: "tutor", value: "tutors"}, 
    {label: "student", value: "students"}
    ]

const [accType, setAccType] = useState("")

  const createAccount = () =>{
    console.log(account)
    if(accType === 'tutors') {
        TutorService.createTutor(account).then((response) => {
            navigate('/login');
        })
        .catch((err) => console.log(err.message)); 
    }
    else if(accType === 'students') {
        StudentService.createStudent(account).then((res) => {
            navigate('/login');
        })
        .catch((err) => console.log(err.message));
    }
    else {
        toggleModal();
    }
    
  }
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  return (
    <div >
        <div className='text-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <Select placeholder="Account Type" onChange={e => setAccType(e.value)}
                        className='browser-default custom-select' options={accounts}>
                        </Select>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </div>
      <div className='container col-lg-8' style={{marginTop:10, border:"1px solid"}}>
          <h3 className='text-center'>Create Account</h3>
          <form role="form" className='col-lg-6 offset-lg-3'>
              <div className='row'>
                  <div className='form-group col-xs-4'>
                      <label className=''>First Name:</label>                            
                      <input placeholder="First Name" value={account.firstName} onChange={e => setFirstName(e.target.value)} className='form-control'
                       />
                  </div>
              </div>
              <div className='row' >
                  <div className='form-group col-xs-4'>
                  <label className=''>Last Name:</label>
                  <input placeholder="Last Name" value={account.lastName} onChange={e => setLastName(e.target.value)} className='form-control'
                  />
                  </div>
              </div>
              <div className='row' >
                  <div className='form-group col-xs-4'>
                  <label className=''>Email Address:</label>
                  <input placeholder="Email Address" value={account.emailId} onChange={e => setEmailId(e.target.value)} className='form-control'
                   />
                  </div>
              </div>
              <div className='row' >
                  <div className='form-group col-xs-4'>
                  <label className=''>Password:</label>
                  <input placeholder="Password" type="password" value={account.password} onChange={e => setPassword(e.target.value)} className='form-control'
                  />
                  </div>
              </div>
                  <br></br>
                  <button className='btn btn-success' type="button" style={{marginBottom:10}} onClick={() => {
                          createAccount(account);}} >Save</button>
                  
                  <Link to="/login">
                      <button className='btn btn-danger' style={{marginBottom: 10, marginLeft: 10}} >Cancel</button>
                  </Link>
          </form>                
      </div>

      <Modal isOpen={isOpen} onRequestClose={toggleModal} className="Modal" ariaHideApp={false} role="dialog">
          <div className='modal-dialog'>
              
              <div className='modal-content'>
                <div className='text-center'>
                    <div className='modal-header text-center'>
                           
                        <h5 className='modal-title w-100'> 
                            Error
                        </h5>
                    </div>
                    
                    <div className='modal-body'>
                        please choose an account type
                    </div>
                    <button className='btn btn-danger' style={{marginBottom:10}} onClick={toggleModal}>close</button> 
                </div>
                  
              </div>

          </div>
         
          
      </Modal>

  </div>
  );
}
