package net.wolfram.springbootbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import net.wolfram.springbootbackend.model.StudentSchedule;

public interface SSchedRepo extends JpaRepository<StudentSchedule, Long>{
    List<StudentSchedule> findByStudentId(Long studentId);
}
