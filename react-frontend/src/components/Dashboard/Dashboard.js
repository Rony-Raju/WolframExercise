import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Dashboard(props) {

    let location = useLocation();
    let tutor = location.state;
    console.log(tutor)
  return (
    <div>
        <h1>Welcome Back {tutor.firstName}!</h1>
    </div>
  )
}
