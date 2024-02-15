package com.party.party.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.party.entity.bookentity;

public interface bookrepo extends JpaRepository<bookentity,Long>{

}