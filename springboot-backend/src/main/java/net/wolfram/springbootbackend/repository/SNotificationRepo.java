package net.wolfram.springbootbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.wolfram.springbootbackend.model.StudentNotification;

@Repository
public interface SNotificationRepo extends JpaRepository<StudentNotification, Long>{
    List<StudentNotification> findByStudentId(Long studentId);
}
