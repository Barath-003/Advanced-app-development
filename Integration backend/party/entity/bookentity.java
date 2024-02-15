package com.party.party.entity;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="book")

public class bookentity {

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
        @Column(name = "amount", nullable = false)
        private String amount;
        @Column(name = "guests", nullable = false)
        private String guests;
        
        public Long getBid() {
            return bid;
        }
        public void setBid(Long bid) {
            this.bid = bid;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }

        public String getSubmission_date() {
            return submission_date;
        }
        public void setSubmission_date(String submission_date) {
            this.submission_date = submission_date;
        }
        public String getDescription() {
            return description;
        }
        public void setDescription(String description) {
            this.description = description;
        }
        public String getEvent_type() {
            return event_type;
        }

        public void setEvent_type(String event_type) {
            this.event_type = event_type;
        }
        public String getEvent_date() {
            return event_date;
        }

        public void setEvent_date(String event_date) {
            this.event_date = event_date;
        }

        public String getAmount() {
            return amount;
        }
        public void setAmount(String amount) {
            this.amount = amount;
        }
        public String getGuests() {
            return guests;
        }
        public void setGuests(String guests) {
            this.guests = guests;
        }

    public bookentity(Long bid, String name, String submission_date, String description, String event_type,
                String event_date, String amount, String guests) {
            this.bid = bid;
            this.name = name;
            this.submission_date = submission_date;
            this.description = description;
            this.event_type = event_type;
            this.event_date = event_date;
            this.amount = amount;
            this.guests = guests;
        }
    public bookentity(){

       }
    public Object save(bookentity b) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }
    public List<bookentity> findAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }
}