package net.wolfram.springbootbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.wolfram.springbootbackend.exception.ResourceNotFoundException;
import net.wolfram.springbootbackend.model.Student;
import net.wolfram.springbootbackend.model.StudentSchedule;
import net.wolfram.springbootbackend.repository.SSchedRepo;
import net.wolfram.springbootbackend.repository.StudentRepo;


@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {
    

    @Autowired
    private StudentRepo studRepo;
    @Autowired
    private SSchedRepo sschedRepo;

    //login student
    @PutMapping("/students")
    public ResponseEntity<Student> loginStudent(@RequestBody Student student) {
        student = studRepo.findByEmailIdAndPass(student.getEmailId(), student.getPass());
        return ResponseEntity.ok(student);
    }
    

    //create student REST API
    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student) {
        return studRepo.save(student);
    }

    //get student by id REST API
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student doesn't exist with id: " + id));
        return ResponseEntity.ok(student);
    }

    //update student REST API
    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
        Student student = studRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student doesn't exist with id: " + id));
        student.setFirstName(studentDetails.getFirstName());
        student.setLastName(studentDetails.getLastName());
        student.setEmailId(studentDetails.getEmailId());
        Student updatedStudent = studRepo.save(student);
        return ResponseEntity.ok(updatedStudent);

    }

    //See Student Schedule
    @GetMapping("/students/{id}/schedule")
    public List<StudentSchedule> getSchedule(@PathVariable Long id){
        List<StudentSchedule> schedule = sschedRepo.findByStudentId(id);
        return schedule;
    }

    //Delete an appointment
    @DeleteMapping("/students/{id}/schedule/{schedId}")
    public void deleteAppt(@PathVariable Long id, @PathVariable Long schedId) {
        sschedRepo.deleteById(schedId);
    }

    //Add an Appointment
    @PutMapping("/students/{id}/schedule")
    public StudentSchedule createSchedule(@RequestBody StudentSchedule schedule) {
        sschedRepo.save(schedule);       
        return schedule;
    }
}

