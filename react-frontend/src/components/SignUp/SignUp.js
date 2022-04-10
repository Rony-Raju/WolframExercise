import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
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
  )
}
