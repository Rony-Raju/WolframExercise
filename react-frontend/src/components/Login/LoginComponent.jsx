import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import TutorService from '../../services/TutorService';

import './Login.css';

class LoginComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            emailId: '',
            password: ''
        }

        
    }

    render() {
        return (
            <div className='login-wrapper'>
                <form>
                    <label>
                        <p>Username</p>
                        <input type="text"/>
                    </label>
                    <br></br>
                    <label>
                        <p>Password</p>
                        <input type="password"/>
                    </label>
                    <div>
                        <Link to="/tutors">
                            <button className="btn btn-primary" style={{marginTop:10}}>Sign In</button>
                        </Link>
                        <Link to="/add-tutor">
                            <button className='btn btn-primary'  style={{marginLeft:10, marginTop:10}}>Sign Up</button>
                        </Link>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default LoginComponent;