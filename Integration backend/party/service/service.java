package com.party.party.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;

import com.party.party.entity.addevententity;
import com.party.party.entity.bookentity;
import com.party.party.entity.mybookingentity;
import com.party.party.entity.registerentity;
import com.party.party.repository.addeventrepo;
import com.party.party.repository.bookrepo;
import com.party.party.repository.mybookingrepo;
import com.party.party.repository.registerrepo;

import jakarta.transaction.Transactional;

@Configuration
public class service {

    /////////
    @Autowired
    private addeventrepo f;
    @Autowired
    private mybookingrepo g;

    public boolean createAddevent(addevententity o) {
        return f.save(o) != null ? true : false;
    }

    public List<addevententity> getAlladdevent() {
        return f.findAll();
    }

    @Autowired
    private bookrepo r;

    public boolean createbookentity(bookentity p) {
        return r.save(p) != null ? true : false;
    }

    public List<bookentity> getAllbooking() {
        return r.findAll();
    }

    @Autowired
    private mybookingrepo q;

    public boolean createbooking(mybookingentity p) {
        return q.save(p) != null ? true : false;
    }

    public List<mybookingentity> getAllbook() {
        return q.findAll();
    }

    @Autowired
    private registerrepo o;

    public boolean createregister(registerentity p) {
        return o.save(p) != null ? true : false;
    }

    public List<registerentity> getAllregister() {
        return o.findAll();
    }

    // update
    public mybookingentity updateBooking(String email, mybookingentity updatedModel, String name) {
        mybookingentity existingBooking = q.findByname(name);
        if (existingBooking != null) {
            // Update existing booking with values from updatedModel
            existingBooking.setName(updatedModel.getName());
            existingBooking.setSubmission_date(updatedModel.getSubmission_date());
            existingBooking.setDescription(updatedModel.getDescription());
            existingBooking.setEvent_type(updatedModel.getEvent_type());
            existingBooking.setEvent_date(updatedModel.getEvent_date());
            existingBooking.setAmount_paid(updatedModel.getAmount_paid());
            existingBooking.setBooking_status(updatedModel.getBooking_status());
            // Save the updated booking
            return q.save(existingBooking);
        } else {
            return null;
        }
    }
    // delete
    // @Transactional
    // public void deleteByEventName(long name){
    // g.deleteById(name);
    // }

}