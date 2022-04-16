import logo from './logo.svg';
import './App.css';
import { Link, Outlet} from 'react-router-dom';

import CreateTutorComponent from './components/CreateTutorComponent';
import LoginComponent from './components/Login/LoginComponent';
import React, {useState} from 'react';

function App() {
  
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link> |{" "}
        <Link to="/add-tutor">Sign Up</Link>
      </nav>
      <Outlet/>
    </div>
    
  );
}

export default App;
