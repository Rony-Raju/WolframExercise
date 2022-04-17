package net.wolfram.springbootbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tutor_notifications")
public class TutorNotification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tutor_id")
    private Long tutorId;

    @Column(name = "message")
    private String message;


    public TutorNotification() {

    }

    public TutorNotification(Long tutorId, String message) {
        this.tutorId = tutorId;
        this.message = message;
    }

    //getters and setters
    public Long getTutorId() {
        return tutorId;
    }
    public void setTutorId(Long tutorId) {
        this.tutorId = tutorId;
    }

    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
}
