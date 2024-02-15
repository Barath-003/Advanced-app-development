package com.party.party.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="addevent")

public class addevententity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long bid;
        @Column(name = "event_type", nullable = false)
        private String event_type;
        @Column(name = "description", nullable = false)
        private String description;
        
        @Column(name = "packages", nullable = false,unique = true)
        private String packages;
    
        @Column(name = "participants", nullable = false)
        private String participants;
       
        @Column(name = "charges", nullable = false)
        private String charges;
    
        
    public Long getBid() {
            return bid;
        }
        public void setBid(Long bid) {
            this.bid = bid;
        }
        public String getEvent_type() {
            return event_type;
        }

        public void setEvent_type(String event_type) {
            this.event_type = event_type;
        }
        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getPackages() {
            return packages;
        }
        public void setPackages(String packages) {
            this.packages = packages;
        }
        public String getParticipants() {
            return participants;
        }
        public void setParticipants(String participants) {
            this.participants = participants;
        }

        public String getCharges() {
            return charges;
        }
        public void setCharges(String charges) {
            this.charges = charges;
        }
    
        public addevententity(Long bid, String event_type, String description, String packages, String participants,
        String charges) {
            this.bid = bid;
            this.event_type = event_type;
            this.description = description;
            this.packages = packages;
            this.participants = participants;
            this.charges = charges;
        }
        public addevententity(){
       }
        public Object save(mybookingentity cr) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'save'");
        }
}