package com.party.party.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.party.entity.addevententity;
import com.party.party.entity.bookentity;

public interface addeventrepo extends JpaRepository<addevententity,Long>{

    Object save(bookentity p);

}