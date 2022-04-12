import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select/';
import TutorService from '../../services/TutorService';

export default function LoginComponent() {

    const navigate = useNavigate();
    const accounts = [
        {label: "tutor", value: "tutors"}, 
        {label: "student", value: "students"}
    ]
    const [accType, setAccType] = useState("")
    
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    let userInfo = {emailId: userName, pass: password}
    let tutor = {}
    const login = () =>{
        TutorService.login(accType, userInfo).then((response) => {         
            tutor = response.data
            navigate('/dashboard', {state:tutor})
        }); 
    }
    return (
        <div>
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
            <div className='login-wrapper text-center'>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text" value={userInfo.userName} onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <br></br>
                    <label>
                        <p>Password</p>
                        <input type="password" value={userInfo.password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                       
                        <button type="button" className="btn btn-primary" style={{marginTop:10}} onClick={login}>Sign In</button>
                    
                        <Link to="/add-tutor">
                            <button className='btn btn-primary'  style={{marginLeft:10, marginTop:10}}>Sign Up</button>
                        </Link>
                    </div>
                    
                </form>
            </div>
        </div>
        
    );
}
