package net.wolfram.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.wolfram.springbootbackend.model.Tutor;
@Repository
public interface TutorRepo extends JpaRepository<Tutor, Long>{
    Tutor findByEmailIdAndPass(String emailId, String pass);
}
