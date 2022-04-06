import logo from './logo.svg';
import './App.css';
import { Link, Outlet} from 'react-router-dom';
import ListTutorComponent from './components/ListTutorComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTutorComponent from './components/CreateTutorComponent';
import UpdateTutorComponent from './components/UpdateTutorComponent';
import Dashboard from './components/Dashboard/Dashboard';
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
        <Link to="/login">login</Link> |{" "}
        <Link to="/dashboard">Expenses</Link>
      </nav>
      <Outlet/>
    </div>
    
  );
}

export default App;
