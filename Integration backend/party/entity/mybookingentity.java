package com.party.party.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
@Table(name="Bookings")

public class mybookingentity {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long bid;
        @Column(name = "name", nullable = false)
        private String name;
        @Column(name = "submission_date", nullable = false)
        private String submission_date;
        @Column(name = "description", nullable = false)
        private String description;
        @Column(name = "event_type", nullable = false)
        private String event_type;
        @Column(name = "event_date", nullable = false)
        private String event_date;
        @Column(name = "amount_paid", nullable = false)
        private String amount_paid;
        @Column(name = "booking_status", nullable = false)
        private String booking_status;
        
    //     public Long getBid() {
    //         return bid;
    //     }
    //     public void setBid(Long bid) {
    //         this.bid = bid;
    //     }
      
    //     public String getname() {
    //         return name;
    //     }


    //     public void setname(String name) {
    //         this.name = name;
    //     }


    //     public String getsubmission_date() {
    //         return submission_date;
    //     }


    //     public void setsubmission_date(String submission_date) {
    //         this.submission_date = submission_date;
    //     }


    //     public String getdescription() {
    //         return description;
    //     }


    //     public void setdescription(String description) {
    //         this.description = description;
    //     }


    //     public String getevent_type() {
    //         return event_type;
    //     }


    //     public void setevent_type(String event_type) {
    //         this.event_type = event_type;
    //     }


    //     public String getevent_date() {
    //         return event_date;
    //     }


    //     public void setevent_date(String event_date) {
    //         this.event_date = event_date;
    //     }


    //     public String getamount_paid() {
    //         return amount_paid;
    //     }


    //     public void setamount_paid(String amount_paid) {
    //         this.amount_paid = amount_paid;
    //     }

    //     public String getbooking_status() {
    //         return booking_status;
    //     }


    //     public void setbooking_status(String booking_status) {
    //         this.booking_status = booking_status;
    //     }

    // public mybookingentity(String name, String submission_date, String description, String event_type,
    //             String event_date, String amount_paid, String eventname, String booking_status) {
    //         this.name = name;
    //         this.submission_date= submission_date;
    //         this.description = description;
    //         this.event_type = event_type;
    //         this.event_date = event_date;
    //         this.amount_paid = amount_paid;
    //         this.booking_status = booking_status;
           
    //     }


    // public mybookingentity(){

    //    }
}