package com.party.party.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.party.party.entity.registerentity;

public interface registerrepo extends JpaRepository<registerentity,Long>{

}