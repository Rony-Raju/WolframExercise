package net.wolfram.springbootbackend.model;


import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student_schedule")
public class StudentSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "tsched_id")
    private Long tschedId;
    @Column(name = "student_id")
    private Long studentId;
    @Column(name = "appt_date")
    private String apptDate;
    @Column(name = "end_time")
    private String endTime;
    @Column(name= "tutor_id")
    private Long tutorId;
    public StudentSchedule() {

    }

    public StudentSchedule(String apptDate, String endTime, Long studentId) {
        this.studentId = studentId;
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

    public Long getStudentId() { 
        return studentId;
    }
    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }
//schedule id in student schedule table
    public Long getTschedId() {
        return tschedId;
    }
    public void setTschedId(Long tschedId) {
        this.tschedId = tschedId;
    }
//database specific unique primary key. Not Student Id
    public Long getSchedId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
//tutor id
    public Long getTutorId() {
        return tutorId;
    }
    public void setTutorId(Long tutorId) {
        this.tutorId = tutorId;
    }
    
}


