package net.wolfram.springbootbackend.model;


import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tutor_schedule")
public class TutorSchedule{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tutor_id")
    private Long tutorId;
    @Column(name = "appt_date")
    private String apptDate;
    @Column(name = "end_time")
    private String endTime;

    public TutorSchedule() {

    }

    public TutorSchedule(String apptDate, String endTime, Long tutorId) {
        this.tutorId = tutorId;
        this.apptDate = apptDate;
        this.endTime = endTime;
    }

    public String getApptDate() {
        return apptDate;
    }
    
    public void setApptDate(String apptDate) {
        this.apptDate = apptDate;
    }

    public String getEndTime() {
        return endTime;
    }
    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public Long getTutorId() { 
        return tutorId;
    }
    public void setTutorId(Long tutorId) {
        this.tutorId = tutorId;
    }

    public Long getSchedId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    
}


