package net.wolfram.springbootbackend.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;


@Embeddable
public class TutorScheduleKey implements Serializable{
    @Column(name = "appt_date")
    private String apptDate;

    @Column(name = "tutor_id")
    private Long tutorId;

    public String getApptDate() {
        return apptDate;
    }

    public void setApptDate(String apptDate) {
        this.apptDate = apptDate;
    }

    public Long getId() {
        return this.tutorId;
    }

    public void setTutorId(Long id) {
        this.tutorId = id;
    }
}