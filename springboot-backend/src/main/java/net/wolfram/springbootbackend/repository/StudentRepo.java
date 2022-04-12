package net.wolfram.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.wolfram.springbootbackend.model.Student;

public interface StudentRepo extends JpaRepository<Student, Long>{
    Student findByEmailIdAndPass(String emailId, String pass);
}
