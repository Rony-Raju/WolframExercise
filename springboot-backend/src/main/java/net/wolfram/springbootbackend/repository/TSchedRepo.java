package net.wolfram.springbootbackend.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import net.wolfram.springbootbackend.model.TutorSchedule;

@Repository
public interface TSchedRepo extends JpaRepository<TutorSchedule, Long>{
    List<TutorSchedule> findByTutorId(Long tutorId);
}
