package net.wolfram.springbootbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.wolfram.springbootbackend.model.TutorNotification;

@Repository
public interface TNotificationRepo extends JpaRepository<TutorNotification, Long>{
    List<TutorNotification> findByTutorId(Long tutorId);
}
