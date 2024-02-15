package com.party.party.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.party.party.entity.addevententity;
import com.party.party.entity.mybookingentity;

public interface mybookingrepo  extends JpaRepository<mybookingentity,Long>{

    Object save(addevententity b);

    mybookingentity findByname(String name);

    // void deleteByEventname(String name);

}