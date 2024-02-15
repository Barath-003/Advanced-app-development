package com.party.party.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import com.party.party.entity.addevententity;
import com.party.party.entity.bookentity;
import com.party.party.entity.mybookingentity;
import com.party.party.entity.registerentity;
import com.party.party.service.service;

import jakarta.transaction.Transactional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

//import com.bala.events.service.Service;
@CrossOrigin
@RestController
@RequestMapping("/map/event")
public class controller {
    @Autowired
    service rp;
    @Autowired
    service er;

    // @Tag(name = "Get Users",description = "endpoint for fetching all users")
    // Post methodes
    @PostMapping("/post/booking")
    public boolean createbooking(@RequestBody mybookingentity m) {
        return rp.createbooking(m);
    }

    @PostMapping("/post/addevent")
    public boolean createAddevent(@RequestBody addevententity mp) {
        return rp.createAddevent(mp);
    }

    @PostMapping("/post/register")
    public boolean createregister(@RequestBody registerentity cr) {
        return rp.createregister(cr);
    }

    @PostMapping("/post/book")
    public boolean createbookentity(@RequestBody bookentity er) {
        return rp.createbookentity(er);
    }

    // Get methodes
    @GetMapping("/get/booking")
    public List<mybookingentity> getAllbook() {
        return rp.getAllbook();
    }

    @GetMapping("/get/book")
    public List<bookentity> getAllbooking() {
        return rp.getAllbooking();
    }

    @GetMapping("/get/addevent")
    public List<addevententity> getAlladdevent() {
        return rp.getAlladdevent();
    }

    @GetMapping("/get/register")
    public List<registerentity> getAllregister() {
        return rp.getAllregister();
    }

    @PutMapping("/update/booking/{name}")
    public ResponseEntity<mybookingentity> updateBooking(@PathVariable String name,
            @RequestBody mybookingentity updatedModel) {
        mybookingentity updatedBooking = er.updateBooking(name, updatedModel, name);
        if (updatedBooking != null) {
            return ResponseEntity.ok(updatedBooking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // delete

    // @Transactional
    // @DeleteMapping("/del/booking/{name}")
    // public String deleteByEventName(@PathVariable long name) {
    // er.deleteByEventName(name);
    // return "Account Deleted";
    // }

}