import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {render} from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/Login/LoginComponent';
import Dashboard from './components/Dashboard/Dashboard';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateTutorComponent from './components/UpdateTutorComponent';
import CreateTutorComponent from './components/CreateTutorComponent';
import ListTutorComponent from './components/ListTutorComponent';
import TutorSchedule from './components/TutorSchedule';
import AddAppointment from './components/AddAppointment';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/tutors" element={<ListTutorComponent/>}/>
        <Route path="/update-tutor/:id" element={<UpdateTutorComponent/>}/>
        <Route path="/add-tutor" element={<CreateTutorComponent/>}/>
        <Route path="/tutor-schedule/:id" element={<TutorSchedule/>}/>
        <Route path="/add-apt" element={<AddAppointment/>}/>
      </Route>
    </Routes>
    <FooterComponent/>
  </BrowserRouter>, 
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
