import axios from 'axios';
import React, { Component } from 'react'

const TUTOR_API_BASE_URL = "http://localhost:8080/api/v1/tutors";
const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students"

class StudentService {

    bookAppt(schedule, studId) {
        return axios.put(STUDENT_API_BASE_URL+'/'+studId+'/schedule', schedule)
    }
  
    getSchedule(studId) {
        return axios.get(STUDENT_API_BASE_URL+'/'+studId+'/schedule')
    }

    cancelAppt(appt) {
        return axios.delete(STUDENT_API_BASE_URL+'/'+appt.studentId+'/schedule/'+appt.schedId)     
    }

}

export default new StudentService()
