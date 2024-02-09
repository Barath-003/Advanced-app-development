package com.partyevent.partyevent.Repository;

import com.partyevent.partyevent.Entity.Addevent;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Addrepo extends JpaRepository<Addevent, Long> {
    Addevent findByEventid(Long Eventid);
    void deleteByEventid(Long Eventid);
    // Other methods...
}