import axios from 'axios';

const TUTOR_API_BASE_URL = "http://localhost:8080/api/v1/tutors";

class TutorService {

    login(accType, userInfo) {
        if(accType === "tutors") {
            return axios.post(TUTOR_API_BASE_URL, userInfo);
        }
        
        else {
            return 0;
        }
    }

    getTutors(){
        return axios.get(TUTOR_API_BASE_URL);
    }

    createTutor(tutor){
        return axios.put(TUTOR_API_BASE_URL, tutor)
    }
    
    getTutorById(tutorId){
        return axios.get(TUTOR_API_BASE_URL+'/'+tutorId, tutorId)
    }
   
    updateTutor(tutorId, tutor){
        
        return axios.put(TUTOR_API_BASE_URL+'/'+ tutorId, tutor)
    }

    getTutorSchedule(tutorId) {
        return axios.get(TUTOR_API_BASE_URL+'/'+tutorId+'/schedule', tutorId);
    }
    deleteTutorSchedule(tutorId, schedId) {
        axios.delete(TUTOR_API_BASE_URL+'/'+tutorId+'/schedule'+'/'+schedId);
        return this.getTutorSchedule(tutorId);
    }
    addTutorSchedule(schedule){
        console.log(schedule)
        return axios.put(TUTOR_API_BASE_URL+'/'+schedule.tutorId+'/schedule', schedule);
    }
}   

export default new TutorService()