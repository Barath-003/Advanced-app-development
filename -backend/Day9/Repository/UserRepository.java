package com.partyevent.partyevent.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.partyevent.partyevent.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
