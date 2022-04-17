import axios from 'axios';


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

    notifyTutor(notification) {
        return axios.put(TUTOR_API_BASE_URL+'/'+notification.tutorId+'/notifications');
    }

    createStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student)
    }

    getNotifications(studentId) {
        return axios.get(STUDENT_API_BASE_URL+'/'+studentId+'/notifications');
    }

    deleteNotification(studentId, noteId) {
        return axios.delete(TUTOR_API_BASE_URL+'/'+studentId+'/notifications/'+noteId);
        
    }
}

export default new StudentService()
