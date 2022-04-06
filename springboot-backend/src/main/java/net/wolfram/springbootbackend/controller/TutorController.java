package net.wolfram.springbootbackend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import net.wolfram.springbootbackend.exception.ResourceNotFoundException;
import net.wolfram.springbootbackend.model.Tutor;
import net.wolfram.springbootbackend.model.TutorSchedule;
import net.wolfram.springbootbackend.repository.TSchedRepo;
import net.wolfram.springbootbackend.repository.TutorRepo;

@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("/api/v1/*")
public class TutorController {
    
    @Autowired
    private TSchedRepo tschedRepo;
    @Autowired
    private TutorRepo tutorRepo;

    //get all tutors
    @GetMapping("/tutors")
    public List<Tutor> getAllTutors(){
        return tutorRepo.findAll();
    }

    //create tutor REST API
    @PostMapping("/tutors")
    public Tutor createTutor(@RequestBody Tutor tutor) {
        return tutorRepo.save(tutor);
    }

    //get tutor by id REST API
    @GetMapping("/tutors/{id}")
    public ResponseEntity<Tutor> getTutorById(@PathVariable Long id) {
        Tutor tutor = tutorRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tutor doesn't exist with id: " + id));
        return ResponseEntity.ok(tutor);
    }

    //update tutor REST API
    @PutMapping("/tutors/{id}")
    public ResponseEntity<Tutor> updateTutor(@PathVariable Long id, @RequestBody Tutor tutorDetails) {
        Tutor tutor = tutorRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tutor doesn't exist with id: " + id));
        tutor.setFirstName(tutorDetails.getFirstName());
        tutor.setLastName(tutorDetails.getLastName());
        tutor.setEmailId(tutorDetails.getEmailId());
        Tutor updatedTutor = tutorRepo.save(tutor);
        return ResponseEntity.ok(updatedTutor);

    }

    //See Tutor Schedule
    @GetMapping("/tutors/{id}/schedule")
    public List<TutorSchedule> getSchedule(@PathVariable Long id){
        List<TutorSchedule> schedule = tschedRepo.findByTutorId(id);
        return schedule;
    }

    //Delete an appointment
    @DeleteMapping("/tutors/{id}/schedule/{schedId}")
    public void deleteAppt(@PathVariable Long id, @PathVariable Long schedId) {
        tschedRepo.deleteById(schedId);
    }

    //Add an Appointment
    @PutMapping("/tutors/{id}/schedule")
    public TutorSchedule createSchedule(@PathVariable Long id, @RequestBody TutorSchedule schedule) {
        schedule.setTutorId(id);
        tschedRepo.save(schedule);       
        return schedule;
    }
}
